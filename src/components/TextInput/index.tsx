import React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

interface ITextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  showReset?: boolean;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  rows?: number;
}

const InputText: React.FC<ITextProps> = ({
  value,
  onChange,
  error,
  showReset = false,
  disabled = false,
  placeholder = "",
  style,
  className,
  rows,
}) => {
  const resetInput = () => {
    onChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  };

  return (
    <div className={`${styles.inputText} ${className}`}>
      <textarea
        className={`${styles.input} ${error ? styles.error : ""}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        style={style}
        rows={rows}
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
