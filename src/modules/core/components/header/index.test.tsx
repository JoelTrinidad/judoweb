import { describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '.';
import { MemoryRouter, Route, Routes } from 'react-router';

describe('Header', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <MemoryRouter initialEntries={['/header']}>
        <Routes>
          <Route path="/" element={<div>root</div>}></Route>
          <Route path="header" element={<Header />} />
        </Routes>
      </MemoryRouter>
    );

    const title = screen.getByText('JudoDigital');

    expect(title).toBeInTheDocument();
    expect(title.parentElement?.tagName).toBe('A');
  });
});
