import React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

interface ITextProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showReset?: boolean;
  register?: any;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  rows?: number;
}

const InputText: React.FC<ITextProps> = ({
  value,
  name,
  onChange,
  showReset = false,
  disabled = false,
  placeholder = "",
  style,
  className,
  rows,
  register,
}) => {
  const resetInput = () => {
    onChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={`${styles.inputText} ${className}`}>
      <input
        type="text"
        {...register(name)}
        className={`${styles.input}`}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        style={style}
      />
      {showReset && (
        <Button className={styles.resetButton} onClick={resetInput}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default InputText;
