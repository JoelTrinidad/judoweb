export interface TechniqueDescriptionElement {
  tag: string;
  content: string;
}

export interface Technique {
  id: string;
  name: string;
  description: TechniqueDescriptionElement[];
}
