import { FormEvent } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Sidebar.scss";
import FilterButton from "../FilterButton/FilterButton";

type SidebarProps = {
  handleSearch: (searchTerm: string) => void;
  handleToggle: ()=> void;
  searchTerm: string;
};

const Sidebar = ({ handleSearch, searchTerm }: SidebarProps) => {
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    handleSearch(inputToLower);
  };



  return (
    <div className="sidebar">
      <SearchBar
        label="Search"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterButton label="ABV" />
      <FilterButton label="Classic Range" />
      <FilterButton label="High Acidity" />
    </div>
  );
};

export default Sidebar;
