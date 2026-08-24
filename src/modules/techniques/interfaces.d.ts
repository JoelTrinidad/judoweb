export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image_group'; images: { src: string; alt: string }[]; caption?: string }
  | { type: 'video'; url: string; label?: string }; // link de YouTube

export interface TechniqueSection {
  key: string; // 'kuzushi' | 'tsukuri' | 'kake' | otras futuras
  title: string; // 'Kuzushi'
  blocks: ContentBlock[];
}

export interface TechniqueContent {
  sections: TechniqueSection[];
}

export interface Technique {
  id: string;
  name: string;
}

interface TechniqueWithContent extends Technique {
  content: TechniqueContent;
}

interface Grade {
  number: string;
  name: string;
  type: string;
  beltColor: string;
}

interface Filters {
  grade: string;
  categoryKey: string; // nodo más específico elegido en el árbol de categorías
}

interface Category {
  name: string;
  translation: string;
  key: string;
  parentKey: string | null; // null = categoría raíz
}
