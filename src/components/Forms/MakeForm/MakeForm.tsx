import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

import styles from "../../../../styles/global.scss";

interface MakeFormProps {
  formStep: number;
  nextFormStep: () => void;
}

export default function MakeForm({ formStep, nextFormStep }: MakeFormProps) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{ email: string }>({ mode: "all" });

  const onSubmit = (values: { email: string }) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Personal Info</h2>

      <form styles={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className={styles.errorText}>Email is required</p>
          )}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
