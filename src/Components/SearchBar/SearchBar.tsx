import { FormEvent } from "react";

type SearchBarProps = {
  label: string;
  searchTerm: string;
  handleInput: (event: FormEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ label, searchTerm, handleInput }: SearchBarProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search-bar">
      <label htmlFor={label} className="search-bar__label">
        {capitalizedLabel}
      </label>
      <input
        type="text"
        id={label}
        name={capitalizedLabel}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </div>
  );
};
export default SearchBar;
