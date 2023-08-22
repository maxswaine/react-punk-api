import { FormEvent } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Sidebar.scss";

type SidebarProps = {
  handleSearch: (searchTerm: string) => void;
};

const Sidebar = ({ handleSearch }: SidebarProps) => {
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    handleSearch(inputToLower);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__checkbox"></div>
      <div className="sidebar__checkbox"></div>
      <div className="sidebar__checkbox"></div>
    </div>
  );
};

export default Sidebar;
