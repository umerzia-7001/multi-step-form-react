import React from "react";
import styles from "./styles.module.scss";

interface Selector {
  name: string;
  options: string[];
  register?: any;
  error?: string | undefined;
}

const DropDown: React.FC<Selector> = ({ name, options, register, error }) => {
  return (
    <div className={styles.DropDown}>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default DropDown;
