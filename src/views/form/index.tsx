import React, { useState } from "react";
import CodeForm from "../../components/Forms/CodeForm/CodeForm";
import ColourForm from "../../components/Forms/ColourForm/ColorForm";
import MakeForm from "../../components/Forms/MakeForm/MakeForm";
import ResultDisplay from "../../components/ResultDisplay";
import { makeFormFields } from "../../hooks/getFormSteps";
import { useFormData } from "../../context";

import { IFormData } from "../../types/global";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const { setFormValues } = useFormData();
  const [formStep, setFormStep] = useState(0);
  const currentFormFields = makeFormFields(formStep);

  const nextFormStep = () => {
    setFormStep((currentStep: number) => currentStep + 1);
  };

  const prevFormStep = () => {
    setFormStep((currentStep: number) => currentStep - 1);
  };

  const formComponents = {
    make: <MakeForm formStep={formStep} nextFormStep={nextFormStep} />,
    colour: <ColourForm formStep={formStep} nextFormStep={nextFormStep} />,
    code: <CodeForm formStep={formStep} nextFormStep={nextFormStep} />,
  };

  const renderForm = () => {
    return (
      currentFormFields &&
      formComponents[currentFormFields.type as keyof IFormData]
    );
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Multi-Step Form</h1>
      {renderForm()}

      {formStep > 2 && <ResultDisplay />}
    </div>
  );
};

export default Form;
