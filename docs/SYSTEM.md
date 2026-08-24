# Sistema: judoweb

## Rutas (`src/modules/core/constants.ts`)

`/` (home), `/history`, `/techniques`, `/glossary`.

## Módulos (`src/modules/`)

- **`core`** — layout, header, `select-input`, y el `Accordion` compartido
  (`components/accordion.tsx`).
- **`glossary`** — lista de palabras (`glossary-list.tsx`) donde cada `glossary-word.tsx` es un
  `Accordion` de un solo item (`type="single"`), independiente entre sí — así cada palabra se
  abre/cierra sin afectar a las demás.
- **`techniques`** — lista + filtros (`filter-bar.tsx`/`useFilterBar.ts`: grado + una cadena
  **dinámica** de dropdowns de categoría, ver más abajo) y el detalle de una técnica
  (`technique-description.tsx`), que renderiza `technique.content.sections` como un `Accordion`
  (`type="single" collapsible`, una sección abierta a la vez).
- **`history`** — página estática.

## Contrato de contenido (debe coincidir con el backend)

Declarado en `src/modules/techniques/interfaces.d.ts`, mismo shape que
`judodigital-backend`'s `src/techniques/content.schema.ts`:

```ts
type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image_group'; images: { src: string; alt: string }[]; caption?: string }
  | { type: 'video'; url: string; label?: string }; // link de YouTube

interface TechniqueSection {
  key: string;
  title: string;
  blocks: ContentBlock[];
}

interface TechniqueContent {
  sections: TechniqueSection[];
}

interface TechniqueWithContent extends Technique {
  content: TechniqueContent;
}
```

## Filtro de categorías (`filter-bar.tsx` + `useFilterBar.ts`)

El backend modela las categorías como un **árbol** de profundidad variable (Nage-waza tiene 3
niveles, Katame-waza solo 2 — ver `docs/SYSTEM.md` del backend), así que el filtro no tiene un
número fijo de dropdowns: `useFilterBar` mantiene `categoryPath: string[]` (claves elegidas,
raíz→hoja) y usa `useQueries` de react-query para pedir en paralelo los hijos de cada nodo ya
elegido. Se renderiza un `SelectInput` por nivel; en cuanto el último nodo elegido no tiene hijos
(es hoja), no aparece un dropdown más. Cambiar una selección en un nivel `i` trunca
`categoryPath` a `i` elementos antes de agregar el nuevo valor, descartando automáticamente
selecciones más profundas que ya no aplican. El último elemento de `categoryPath` es el que se
manda como `filters.categoryKey`. Ver `filter-bar.test.tsx` para los tres casos cubiertos (rama
de 2 niveles, rama de 3 niveles, truncamiento).

## Componente `Accordion` (`src/modules/core/components/accordion.tsx`)

Wrapper delgado sobre `@radix-ui/react-accordion`:

```ts
interface AccordionItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
}

<Accordion items={AccordionItem[]} type="single" | "multiple" />
```

- `type="single"` (con `collapsible` interno): solo un item abierto a la vez — usado en
  `technique-description.tsx` para las secciones Kuzushi/Tsukuri/Kake.
- `type="multiple"`: los items se abren/cierran independientemente — usado (con un solo item
  cada vez) en `glossary-word.tsx`.
- Reutiliza las clases de color/tipografía del diseño original (`bg-gray-800`,
  `text-yellow-400`, `text-white`); los estados de interacción (rotación del ícono, color activo)
  se manejan con los selectores `data-[state=open]` que expone Radix, no con los hacks de
  `<details>` que existían antes. Las sombras en estado abierto quedaron fuera de esta pasada
  (pulido visual pendiente, a decidir después de ver el estilo base).

## Renderizado de bloques (`technique-description.tsx`)

Un `switch (block.type)` mapea cada bloque a su elemento: `paragraph`→`<p>`,
`heading`→`<h2>/<h3>`, `list`→`<ul>/<ol>`, `image`→`<figure><img/><figcaption/></figure>`,
`image_group`→fila `flex` de `<img>` + una sola `<figcaption>`, `video`→`<iframe>` (la URL de
YouTube se convierte a su forma de embed con `getYoutubeEmbedUrl`).
