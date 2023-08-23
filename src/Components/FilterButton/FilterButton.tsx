import { ChangeEvent } from "react";
import "./FilterButton.scss";

type FilterButtonProps = {
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

const FilterButton = ({ label, handleChange, checked }: FilterButtonProps) => {
  return (
    <div className="checkbox-wrapper">
      <input
        id={label}
        name="checkbox"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <label className="terms-label" htmlFor={label}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
          className="checkbox-svg"
        >
          <mask fill="white" id="path-1-inside-1_476_5-37">
            <rect height="200" width="200"></rect>
          </mask>
          <rect
            mask="url(#path-1-inside-1_476_5-37)"
            strokeWidth="40"
            className="checkbox-box"
            height="200"
            width="200"
          ></rect>
          <path
            strokeWidth="15"
            d="M52 111.018L76.9867 136L149 64"
            className="checkbox-tick"
          ></path>
        </svg>
        <span className="label-text">{label}</span>
      </label>
    </div>
  );
};

export default FilterButton;
