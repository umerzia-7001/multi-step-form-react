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
  } = useForm({ mode: "all" });

  const onSubmit = (values: any) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Billing Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p className={styles.errorText}>Shipping address is required</p>
          )}
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}
