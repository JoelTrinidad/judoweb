export interface TechniqueDescriptionElement {
  tag: string;
  content: string;
}

export interface Technique {
  id: string;
  name: string;
}

interface TechniqueWithDescription extends Technique {
  description: TechniqueDescriptionElement[];
}

interface Grade {
  number: string;
  name: string;
  type: string;
  beltColor: string;
}

interface Filters {
  grade: string;
  category: string;
  subcategory: string;
}

interface Category {
  name: string;
  translation: string;
  key: string;
}

interface Subcategory {
  name: string;
  translation: string;
  key: string;
  category: string;
}
