const formSteps = [
  {
    field: {
      title: "Make",
      name: "make",
      type: "select",
      buttonText: "NEXT",
      options: [
        {
          selected: true,
          value: "AUDI",
        },
        {
          selected: false,
          value: "BMW",
        },
        {
          selected: false,
          value: "VAUXHAL",
        },
        {
          selected: true,
          value: "MERCEDEDS",
        },
        {
          selected: false,
          value: "PEUGOT",
        },
        {
          selected: false,
          value: "RENAULT",
        },
      ],
    },
  },
  {
    field: {
      title: "Colour",
      name: "colour",
      type: "select",
      buttonText: "NEXT",
      options: [
        {
          selected: true,
          value: "BLUE",
        },
        {
          selected: false,
          value: "RED",
        },

        {
          selected: false,
          value: "BLACK",
        },
        {
          selected: false,
          value: "ORANGE",
        },
      ],
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

export { formSteps };
