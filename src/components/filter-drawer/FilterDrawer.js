import { useState, useEffect, useRef } from "react";
import { GuestsPanel } from "./guests-panel/GuestsPanel";
import { LocationList } from "./location-list/LocationList";
import { SearchButton } from "../search-button/SearchButton";
import { GridContainer, StyledFilterDrawer } from "./FilterDrawer.styled";
import { InputGroup } from "./input-group/InputGroup";
import { Input } from "./input/Input.styled";
import { InputBox } from "./input-box/InputBox";
import { MobileTop } from "./mobile-top/MobileTop";
import { HorizontalDivider } from "../ui/divider/Divider";

export const FilterDrawer = ({
  active,
  drawerToggler,
  setApartments,
  setPlaceholderLocation,
  getAllApartments,
}) => {
  const [show, setShow] = useState(false);
  const [inputLocationValue, setInputLocationValue] = useState("");
  const [inputGuestsValue, setInputGuestsValue] = useState("");

  const [locations, setLocations] = useState([]);
  const allLocationsRef = useRef();
  const selectedLocationRef = useRef();

  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = async () => {
    const res = await fetch(`http://localhost:3003/apartmentsSearch`);
    const data = await res.json();
    setLocations(data);
    allLocationsRef.current = data;
  };

  const handleSearch = (e) => {
    setInputLocationValue(e.target.value);

    if (e.target.value === "") {
      getAllApartments();
    }

    let filteredLocations = allLocationsRef.current.filter(
      (location) =>
        location.city.toUpperCase().includes(e.target.value.toUpperCase()) ||
        location.country.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setLocations(filteredLocations);
  };

  const getSearchedLocation = async () => {
    const res = await fetch(
      `http://localhost:3003/apartments?city=${selectedLocationRef.current}`
    );
    const data = await res.json();

    setApartments(data);
  };

  const showResults = () => {
    drawerToggler();
    setPlaceholderLocation(inputLocationValue);

    selectedLocationRef.current = locations.city;
    selectedLocationRef.current && getSearchedLocation();
  };

  const locationPlaceholder = `Search by address...`;
  const guestsPlaceholder = `Add guests`;

  const showFilter = () => {
    setShow(!show);
  };
  const showLocation = () => {
    show && showFilter();
  };
  const showGuests = () => {
    !show && showFilter();
  };

  return (
    <StyledFilterDrawer active={active}>
      <MobileTop handleClose={drawerToggler} />
      <InputGroup>
        <InputBox label="location" onClick={showLocation}>
          <Input
            value={inputLocationValue}
            placeholder={locationPlaceholder}
            onChange={handleSearch}
          />
        </InputBox>
        <HorizontalDivider mobile />
        <InputBox label="guests" onClick={showGuests}>
          <Input
            value={inputGuestsValue ? inputGuestsValue + " guests" : ""}
            placeholder={guestsPlaceholder}
            disabled
          />
        </InputBox>

        <SearchButton onClick={showResults} desktop />
      </InputGroup>
      <GridContainer>
        <LocationList
          show={show}
          locations={locations}
          setInputValue={setInputLocationValue}
          setLocations={setLocations}
        />
        <GuestsPanel
          show={show}
          inputGuestsValue={inputGuestsValue}
          setInputGuestsValue={setInputGuestsValue}
        />
      </GridContainer>

      <SearchButton onClick={showResults} mobile />
    </StyledFilterDrawer>
  );
};
