interface IFormData {
  options?: string[];
  title: string;
  name: string;
  type: string;
  buttonText: string;
}

function makeFormFields(index: number) {
  const formFields: IFormData[] = [
    {
      title: "Make",
      name: "make",
      type: "make",
      buttonText: "NEXT",
      options: ["AUDI", "BMW", "VAUXHAL", "MERCEDEDS", "PEUGOT", "RENAULT"],
    },
    {
      title: "Colour",
      name: "colour",
      type: "colour",
      buttonText: "NEXT",
      options: ["BLUE", "BLACK", "RED", "ORANGE"],
    },
    {
      title: "Code",
      name: "code",
      type: "code",
      buttonText: "DONE",
      options: [],
    },
  ];

  if (index >= 0 && index < formFields.length) {
    return formFields[index];
  }
}

export { makeFormFields };
