import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchBox } from "./SearchBox.styled";
import { LocationInput } from "./location-input/LocationInput";
import { GuestsButton } from "./guests-button/GuestsButton";
import { IconWrapper } from "../icon-wrapper/IconWrapper";
import { VerticalDivider } from "../ui/divider/Divider";

export const SearchBox = ({ drawerToggler, placeholder }) => {
  return (
    <StyledSearchBox>
      <LocationInput placeholder={placeholder} onClick={drawerToggler} />
      <VerticalDivider />
      <GuestsButton onClick={drawerToggler}>Add guests</GuestsButton>
      <VerticalDivider />
      <IconWrapper>
        <SearchIcon
          sx={{ color: "accent.main", minWidth: 55 }}
          onClick={drawerToggler}
        />
      </IconWrapper>
    </StyledSearchBox>
  );
};
