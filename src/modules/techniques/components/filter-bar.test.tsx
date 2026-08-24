import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import FilterBar from './filter-bar';
import * as service from '../techniques.service';
import { Category } from '../interfaces';

vi.mock('../techniques.service');

const rootCategories: Category[] = [
  {
    key: 'nagewaza',
    name: 'Nage-waza',
    translation: 'Técnicas en posición de pie',
    parentKey: null,
  },
  { key: 'katamewaza', name: 'Katame-waza', translation: 'Técnicas en el suelo', parentKey: null },
];

const childrenByParent: Record<string, Category[]> = {
  nagewaza: [
    { key: 'tachiwaza', name: 'Tachi-waza', translation: 'Técnicas de pie', parentKey: 'nagewaza' },
    {
      key: 'sutemiwaza',
      name: 'Sutemi-waza',
      translation: 'Técnicas de sacrificio',
      parentKey: 'nagewaza',
    },
  ],
  tachiwaza: [
    { key: 'tewaza', name: 'Te-waza', translation: 'Técnicas de mano', parentKey: 'tachiwaza' },
  ],
  katamewaza: [
    {
      key: 'osaekomiwaza',
      name: 'Osaekomi-waza',
      translation: 'Técnicas de inmovilización',
      parentKey: 'katamewaza',
    },
  ],
};

function renderFilterBar() {
  const queryClient = new QueryClient();
  const changeFilters = vi.fn();

  render(
    <QueryClientProvider client={queryClient}>
      <FilterBar filters={{ grade: '', categoryKey: '' }} changeFilters={changeFilters} />
    </QueryClientProvider>
  );

  return { changeFilters };
}

describe('FilterBar', () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.mocked(service.getGrades).mockResolvedValue([]);
    vi.mocked(service.getCategories).mockResolvedValue(rootCategories);
    vi.mocked(service.getCategoryChildren).mockImplementation(
      async (parentKey: string) => childrenByParent[parentKey] ?? []
    );
  });

  it('stops at one extra dropdown for a branch with 2 levels (Katame-waza)', async () => {
    const user = userEvent.setup();
    const { changeFilters } = renderFilterBar();

    await screen.findByLabelText('Categoría');
    await user.selectOptions(screen.getByLabelText('Categoría'), 'katamewaza');

    const subcategorySelect = await screen.findByLabelText('Subcategoría');
    expect(changeFilters).toHaveBeenLastCalledWith({ categoryKey: 'katamewaza' });

    await user.selectOptions(subcategorySelect, 'osaekomiwaza');
    expect(changeFilters).toHaveBeenLastCalledWith({ categoryKey: 'osaekomiwaza' });

    // osaekomiwaza es hoja: no debe quedar un tercer dropdown de categoría.
    await waitFor(() => {
      expect(screen.queryAllByRole('combobox')).toHaveLength(3); // Grado + Categoría + Subcategoría
    });
  });

  it('shows two extra dropdowns for a 3-level branch (Nage-waza -> Tachi-waza -> Te-waza)', async () => {
    const user = userEvent.setup();
    renderFilterBar();

    await screen.findByLabelText('Categoría');
    await user.selectOptions(screen.getByLabelText('Categoría'), 'nagewaza');

    const level2 = await screen.findByLabelText('Subcategoría');
    await user.selectOptions(level2, 'tachiwaza');

    await screen.findByText(/Te-waza/);
    await waitFor(() => {
      expect(screen.queryAllByRole('combobox')).toHaveLength(4); // Grado + 3 niveles de categoría
    });
  });

  it('truncates deeper selections when an earlier level changes', async () => {
    const user = userEvent.setup();
    const { changeFilters } = renderFilterBar();

    await screen.findByLabelText('Categoría');
    await user.selectOptions(screen.getByLabelText('Categoría'), 'nagewaza');
    await user.selectOptions(await screen.findByLabelText('Subcategoría'), 'tachiwaza');
    await screen.findByText(/Te-waza/);

    // Cambiar el nivel raíz a Katame-waza debe descartar tachiwaza/tewaza y mostrar Osaekomi-waza.
    await user.selectOptions(screen.getByLabelText('Categoría'), 'katamewaza');

    await screen.findByText(/Osaekomi-waza/);
    expect(screen.queryByText(/Tachi-waza/)).not.toBeInTheDocument();
    expect(changeFilters).toHaveBeenLastCalledWith({ categoryKey: 'katamewaza' });
  });
});
