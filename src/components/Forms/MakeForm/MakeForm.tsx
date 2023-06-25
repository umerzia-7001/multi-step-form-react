import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import Selector from "../../Selector";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMakeSchema } from "../../../hooks/useFormValidationSchema";
import { useFormData } from "../../../context";
import { makeFormFields } from "../../../hooks/getFormSteps";

import styles from "./styles.module.scss";

interface MakeFormProps {
  formStep: number;
  nextFormStep: () => void;
}

export default function MakeForm({ formStep, nextFormStep }: MakeFormProps) {
  const selectedFormData = makeFormFields(formStep);
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{ make: string }>({
    mode: "all",
    resolver: yupResolver(useMakeSchema()),
  });

  const onSubmit = (values: { make: string }) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <form
      className={`${styles.Form} ${
        formStep === 0 ? styles.showForm : styles.hideForm
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.formCard}>
        <div className={styles.formField}>
          <label htmlFor="make">{selectedFormData?.title}</label>
          <Selector
            options={selectedFormData?.options ?? []}
            name={selectedFormData?.name}
            type={selectedFormData?.type}
            register={register}
          />

          {errors.make && (
            <p className={styles.errorText}>{errors.make?.message as string}</p>
          )}
        </div>
        <Button type="submit" className={styles.button} variant="contained">
          {selectedFormData?.buttonText}
        </Button>
      </div>
    </form>
  );
}
