// export enum FORM_TOOLS {
//   input = "input",
//   result = "result",
// }

// {
//   1: {
//     component: <>div</>,
//     props: {

//     }
//   }
// }

// const FirstStep = () => {
//   return (
//     <
//   )
// }

// const getFormSteps = (
//   content: {
//     [key: string]: string;
//   },
//   toolType: FORM_TOOLS
// ) => {
//   const initialFormSteps: { [key in FORM_TOOLS]: any } = {
//     [FORM_TOOLS.input]: [
//       {
//       field: [{
//            type: "selector",
//       title: "Make",
//          label: "Make",
//       button:{ text: "Next" },
//             options: [
//               { id: 'car-model-1', label: 'AUDI', value: 1 },
//               { id: 'car-model-2', label: 'BMW', value: 2},
//               { id: 'car-model-3', label: 'VAUXHAL', value: 3},
//               { id: 'car-model-4', label: 'MERCEDEDS', value: 4},
//               { id: 'car-model-5', label: 'PEUGOT', value: 5},
//               { id: 'car-model-6', label: 'RENAULT', value: 6},
//             ],
//           }
//           {

//            type: 'selector',
//       title: "Colour",
//               label: "Colour",
//       button:{ text: "Next" },
//             options: [
//               { id: 'car-color-1', label: 'BLUE', value: 1 },
//               { id: 'car-colour-2', label: 'BLACK', value: 2},
//               { id: 'car-colour-3', label: 'RED', value: 3},
//               { id: 'car-colour-4', label: 'ORANGE', value: 4},
//             ],
//           }

//             {

//            type: 'selector',
//       title: 'Colour',
//       button:{ text: "Next", "Next" }
//             options: [

//             ],
//           },],
//       },
//     ],

//     [FORM_TOOLS.result]: [

//     ]
//   };
//   return initialFormSteps[toolType];
// };

const formSteps = [
  {
    field: {
      title: "Make",
      type: "select",
      buttonText: "NEXT",
      options: ["AUDI", "BMW", "VAUXHAL", "MERCEDEDS", "PEUGOT", "RENAULT"],
    },
  },
  {
    field: {
      title: "Colour",
      type: "select",
      buttonText: "NEXT",
      options: ["BLUE", "BLACK", "RED", "ORANGE"],
    },
  },
  {
    field: {
      title: "Code",
      type: "text",
      buttonText: "DONE",
      options: ["USA"],
    },
  },
];

export { formSteps };
// export { getFormSteps };
