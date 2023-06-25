import React from "react";
import styles from "./styles.module.scss";

interface Selector {
  name?: string;
  value?: string;
  options: any[];
  register?: any;
  error?: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<Selector> = ({
  name,
  value,
  options,
  register,
  error,
  onChange,
}) => {
  return (
    <div className={`${styles.DropDown} ${!!error ? styles.error : ""}`}>
      <select className={styles.select} {...register(name)} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
