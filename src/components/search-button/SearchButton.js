import { StyledSearchButton } from "./SearchButton.styled";
import { ButtonText } from "./ButtonText";
import SearchIcon from "@mui/icons-material/Search";

export const SearchButton = ({ onClick, desktop }) => {
  return (
    <StyledSearchButton onClick={onClick} desktop={desktop}>
      <SearchIcon />
      <ButtonText>Search</ButtonText>
    </StyledSearchButton>
  );
};
