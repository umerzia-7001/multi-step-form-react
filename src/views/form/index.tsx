import React, { useState } from "react";
import CodeForm from "../../components/Forms/CodeForm/CodeForm";
import ColourForm from "../../components/Forms/ColourForm/ColorForm";
import MakeForm from "../../components/Forms/MakeForm/MakeForm";
import ResultDisplay from "./ResultDisplay";

import styles from "./styles.module.scss";

const initialValues = {
  make: "AUDI",
  colour: "BlUE",
  code: "",
};
const Form: React.FC = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () =>
    setFormStep((currentStep: number) => currentStep + 1);

  const prevFormStep = () =>
    setFormStep((currentStep: number) => currentStep - 1);

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Multi-Step Form</h1>
      {formStep === 0 && (
        <MakeForm formStep={formStep} nextFormStep={nextFormStep} />
      )}
      {formStep === 1 && (
        <ColourForm formStep={formStep} nextFormStep={nextFormStep} />
      )}
      {formStep === 2 && (
        <CodeForm formStep={formStep} nextFormStep={nextFormStep} />
      )}

      {formStep > 2 && <ResultDisplay />}
    </div>
  );
};

export default Form;
