import React, { useState } from "react";
import Selector from "../../components/Selector/index";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SelectedFieldsDisplay from "./SelectedFieldsDisplay";
import { formSteps } from "../../hooks/getFormSteps";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import styles from "./styles.module.scss";

interface IFormProps {}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
});

const Form: React.FC<IFormProps> = () => {
  const [step, setStep] = useState(0);
  const [text, setValue] = useState("");

  const currentStep = formSteps[step];

  // const { register, handleSubmit, setValue } = useForm<FormData>({
  //   validationSchema,
  //   defaultValues: {},
  // });

  const carDetails = {
    make: "Toyota",
    colour: "Red",
    code: "12345",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < formSteps.length) setStep(step + 1);
  };

  const handleChange = (val: any) => {};

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      {step <= formSteps.length - 1 && (
        <div className={styles.formField}>
          <h2>{currentStep.field.title}</h2>

          {currentStep.field.type === "select" ? (
            <Selector
              name={currentStep.field.title}
              options={currentStep.field.options}
              // register={register}
              // error={errors[currentStep.field.title]?.message}
            />
          ) : (
            <TextInput value={text} onChange={handleTextChange} showReset />
          )}

          <Button className={styles.button} variant="contained">
            {currentStep.field.buttonText}
          </Button>
        </div>
      )}

      {step === formSteps.length && (
        <SelectedFieldsDisplay carDetails={carDetails} />
      )}
    </form>
  );
};

export default Form;
