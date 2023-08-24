import { FormEvent } from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterButton from "../FilterButton/FilterButton";
import "./Sidebar.scss";

type SidebarProps = {
  handleSearch: (searchTerm: string) => void;
  handleFilterChange: (filterLabel: string) => void;
  searchTerm: string;
  filterStates: Record<string, boolean>;
};

const Sidebar = ({
  handleSearch,
  searchTerm,
  filterStates,
  handleFilterChange,
}: SidebarProps) => {
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    handleSearch(inputToLower);
  };

  return (
    <div className="sidebar__element">
      <SearchBar
        label="Search"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterButton
        label="ABV"
        handleChange={() => handleFilterChange("ABV")}
        checked={filterStates["ABV"]}
      />
      <FilterButton
        label="Classic Range"
        handleChange={() => handleFilterChange("classic")}
        checked={filterStates["classic"]}
      />
      <FilterButton
        label="High Acidity"
        handleChange={() => handleFilterChange("acid")}
        checked={filterStates["acid"]}
      />
    </div>
  );
};

export default Sidebar;
