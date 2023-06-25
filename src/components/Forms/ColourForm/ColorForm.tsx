import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

import styles from "../../../../styles/global.scss";

interface CodeFormProps {
  formStep: number;
  nextFormStep: () => void;
}

export default function CodeForm({ formStep, nextFormStep }: CodeFormProps) {
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
