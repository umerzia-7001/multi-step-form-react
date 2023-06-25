function makeFormFields(index: number) {
  const formFields = [
    {
      field: {
        title: "Make",
        name: "make",
        type: "select",
        buttonText: "NEXT",
        options: ["AUDI", "BMW", "VAUXHAL", "MERCEDEDS", "PEUGOT", "RENAULT"],
      },
    },
    {
      field: {
        title: "Colour",
        name: "colour",
        type: "select",
        buttonText: "NEXT",
        options: ["BLUE", "BLACK", "RED", "ORANGE"],
      },
    },
    {
      field: {
        title: "Code",
        name: "code",
        type: "text",
        buttonText: "DONE",
        options: [],
      },
    },
  ];

  if (index >= 0 && index < formFields.length) {
    return formFields[index];
  } else {
  }
}

// const makeFormFields = [
//   {
//     field: {
//       title: "Make",
//       name: "make",
//       type: "select",
//       buttonText: "NEXT",
//       options: ["AUDI", "BMW", "VAUXHAL", "MERCEDEDS", "PEUGOT", "RENAULT"],
//     },
//   },
//   {
//     field: {
//       title: "Colour",
//       name: "colour",
//       type: "select",
//       buttonText: "NEXT",
//       options: ["BLUE", "BLACK", "RED", "ORANGE"],
//     },
//   },
//   {
//     field: {
//       title: "Code",
//       name: "code",
//       type: "text",
//       buttonText: "DONE",
//       options: [],
//     },
//   },
// ];

export { makeFormFields };
