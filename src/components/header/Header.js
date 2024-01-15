import { useState } from "react";
import { StyledHeader } from "./Header.styled";
import { Logo } from "../logo/Logo";
import { SearchBox } from "../search-box/SearchBox";
import { FilterDrawer } from "../filter-drawer/FilterDrawer";

export const Header = ({ setApartments, getAllApartments }) => {
  const [placeholderLocation, setPlaceholderLocation] = useState();

  const [active, setActive] = useState(true);

  const toggleFilterDrawer = () => {
    setActive(!active);
  };

  return (
    <StyledHeader>
      <Logo onClick={() => {}} active={active} />
      <SearchBox
        drawerToggler={toggleFilterDrawer}
        active={active}
        placeholder={placeholderLocation}
      />
      <FilterDrawer
        active={active}
        drawerToggler={toggleFilterDrawer}
        setPlaceholderLocation={setPlaceholderLocation}
        setApartments={setApartments}
        getAllApartments={getAllApartments}
      />
    </StyledHeader>
  );
};
