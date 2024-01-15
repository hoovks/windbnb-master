import { StyledLocationList } from "./LocationList.styled";
import { Location } from "./LocationList.styled";
import { Text } from "../../../atoms/Text/Text";
import PlaceIcon from "@mui/icons-material/Place";

export const LocationList = ({
  show,
  locations,
  setInputValue,
  setLocations,
}) => {
  const list =
    !!locations.length &&
    locations.map((location) => {
      return (
        <Location
          data-city={location.city}
          data-country={location.country}
          key={location.id}
          onClick={(e) => {
            setLocations(location);
            setInputValue(
              `${e.currentTarget.dataset.city}, ${e.currentTarget.dataset.country}`
            );
          }}
        >
          <PlaceIcon />
          <Text
            fontWeight="400"
            fontSize="14px"
            color={({ theme }) => theme.palette.primary.dark}
          >
            {location.city}, {location.country}
          </Text>
        </Location>
      );
    });

  return <StyledLocationList show={show}>{list}</StyledLocationList>;
};
