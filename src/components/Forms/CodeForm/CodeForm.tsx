import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import TextInput from "../../TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormData } from "../../../context";
import { useCodeSchema } from "../../../hooks/useFormValidationSchema";
import { IFormData } from "../../../types/modules/form";

import styles from "./styles.module.scss";

interface CodeFormProps {
  formStep: number;
  nextFormStep: () => void;
}

export default function CodeForm({ formStep, nextFormStep }: CodeFormProps) {
  const [text, setText] = useState<string>("");

  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all", resolver: yupResolver(useCodeSchema()) });

  const onSubmit = (values: { code: string }) => {
    setFormValues(values);
    nextFormStep();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form
      className={`${styles.Form} ${
        formStep === 0 ? styles.showForm : styles.hideForm
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.formCard}>
        <div>
          <label htmlFor="code">Code</label>
          <TextInput
            value={text}
            name="code"
            onChange={handleTextChange}
            showReset={false}
            register={register}
          />
          {errors.code && (
            <p className={styles.errorText}>{errors.code?.message as string}</p>
          )}
        </div>
        <Button type="submit" className={styles.button} variant="contained">
          Done
        </Button>
      </div>
    </form>
  );
}
