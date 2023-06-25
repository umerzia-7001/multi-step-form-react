import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import Selector from "../../Selector";
import { yupResolver } from "@hookform/resolvers/yup";
import { useColourSchema } from "../../../hooks/useFormValidationSchema";
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
          <label htmlFor="colour">Colour</label>
          <Selector
            options={["BLUE", "BLACK", "RED", "ORANGE"]}
            name="colour"
            type="colour"
            register={register}
          />

          {errors.colour && (
            <p className={styles.errorText}>
              {errors.colour?.message as string}
            </p>
          )}
        </div>
        <Button type="submit" className={styles.button} variant="contained">
          Next
        </Button>
      </div>
    </form>
  );
}
