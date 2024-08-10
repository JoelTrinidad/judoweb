export interface TechniqueDescriptionElement {
  tag: string;
  content: string;
}

export interface Technique {
  name: string;
  description: TechniqueDescriptionElement[];
}
