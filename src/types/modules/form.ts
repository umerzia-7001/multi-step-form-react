interface IFormData {
  make: string;
  colour: string;
  code: string;
}

interface ISelectedFieldsDisplay {
  carDetails: IFormData;
}

export type { IFormData, ISelectedFieldsDisplay };
