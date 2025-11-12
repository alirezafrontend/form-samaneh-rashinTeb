import type React from "react";

interface InputProps {
  labelInput: string;
  nameInput: string;
  typeInput: string;
  placeholderInput?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputText = ({
  labelInput,
  nameInput,
  typeInput,
  placeholderInput,
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={nameInput} className="form-label">
        {labelInput} :
      </label>
      <input
        type={typeInput}
        className="form-control"
        name={nameInput}
        id={nameInput}
        placeholder={placeholderInput}
        value={value}
        onChange={onChange}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default InputText;
