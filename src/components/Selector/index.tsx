import React from "react";
import styles from "./styles.module.scss";

interface Selector {
  name?: string;
  type?: string;
  value?: string;
  options: any[];
  register?: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<Selector> = ({
  name,
  type,
  value,
  options,
  register,
  onChange,
}) => {
  return (
    <div className={`${styles.DropDown} `}>
      <select
        type={name}
        className={styles.select}
        {...register(name)}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
