import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import Selector from "../../Selector";
import { yupResolver } from "@hookform/resolvers/yup";
import { useColourSchema } from "../../../hooks/useFormValidationSchema";
import { makeFormFields } from "../../../hooks/getFormSteps";
import { useFormData } from "../../../context";

import styles from "./styles.module.scss";

interface ColourFormProps {
  formStep: number;
  nextFormStep: () => void;
}

export default function ColourForm({
  formStep,
  nextFormStep,
}: ColourFormProps) {
  const selectedFormData = makeFormFields(formStep);
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{ colour: string }>({
    mode: "all",
    resolver: yupResolver(useColourSchema()),
  });

  const onSubmit = (values: { colour: string }) => {
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
          <label htmlFor="colour">{selectedFormData?.title}</label>
          <Selector
            options={selectedFormData?.options ?? []}
            name={selectedFormData?.name}
            type={selectedFormData?.type}
            register={register}
          />

          {errors.colour && (
            <p className={styles.errorText}>
              {errors.colour?.message as string}
            </p>
          )}
        </div>
        <Button type="submit" className={styles.button} variant="contained">
          {selectedFormData?.buttonText}
        </Button>
      </div>
    </form>
  );
}
