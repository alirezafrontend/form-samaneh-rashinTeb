import type React from "react";

type OptionSelect = string | number;

interface InputSelectProps {
  labelSelect: string;
  nameSelect: string;
  optionSelect: OptionSelect[];
  labelOption: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  labelSelect,
  nameSelect,
  optionSelect,
  labelOption,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="d-flex flex-column mb-3">
      <label htmlFor={nameSelect} className="form-label">
        {labelSelect} :
      </label>
      <select
        className="form-select"
        name={nameSelect}
        id={nameSelect}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {labelOption}
        </option>
        {optionSelect.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default InputSelect;
