import React, { useState } from "react";
import Selector from "../../components/Selector";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SelectedFieldsDisplay from "./SelectedFieldsDisplay";
import { useFormValidationSchema } from "../../hooks/useFormValidationSchema";
import { formSteps } from "../../hooks/getFormSteps";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IFormData } from "../../types/modules/form";

import styles from "./styles.module.scss";

interface IFormProps {}

const initialValues = {
  make: "AUDI",
  colour: "BlUE",
  code: "",
};

const Form: React.FC<IFormProps> = () => {
  const [step, setStep] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [formData, setFormData] = useState<IFormData>(initialValues);
  const [isStepValid, setIsStepValid] = useState<Boolean>(true);
  const currentStep = formSteps[step];
  const isLastStep = step === formSteps.length;

  const {
    register,
    handleSubmit,
    trigger,
    setError,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: initialValues,
    resolver: yupResolver(useFormValidationSchema()),
  });

  const onClicked: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const isCurrentStepValid = await trigger([
      currentStep.field.name as keyof IFormData,
      formData.code as keyof IFormData,
    ]);

    if (!isCurrentStepValid) {
      setError(currentStep.field.name as keyof IFormData, {
        type: "custom",
        message: errors.code?.message,
      });
    }

    if (step < formSteps.length && isCurrentStepValid) setStep(step + 1);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(e.target.name, e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    updateFormData(fieldName, value);
  };

  const updateFormData = (fieldName: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData!,
      [fieldName]: value,
    }));
  };

  const onSubmit: SubmitHandler<IFormData> = (data: IFormData) =>
    alert(JSON.stringify(data));

  console.log(formData);
  return (
    <form
      className={styles.Form}
      onSubmit={(console.log("SUBMIT"), handleSubmit(onSubmit))}
    >
      {step <= formSteps.length - 1 && (
        <div className={styles.formField}>
          <h2>{currentStep.field.title}</h2>

          {currentStep.field.type === "select" ? (
            <Selector
              // value={currentStep.field.name}
              name={currentStep.field.name}
              options={currentStep.field.options}
              register={register}
              onChange={handleSelectChange}
              error={!!errors.make?.message || !!errors.colour?.message}
            />
          ) : (
            <TextInput
              name={currentStep.field.name}
              value={text}
              onChange={handleTextChange}
              showReset={false}
              register={register}
              error={!!errors.code?.message}
            />
          )}

          <Button
            className={styles.button}
            variant="contained"
            onClick={onClicked}
            // disabled={!isStepValid}
          >
            {currentStep.field.buttonText}
          </Button>
        </div>
      )}
      <p> {errors.code?.message}</p>
      {isLastStep && <SelectedFieldsDisplay carDetails={formData} />}
    </form>
  );
};

export default Form;
