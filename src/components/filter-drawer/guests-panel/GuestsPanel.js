import { useState, useEffect, cloneElement } from "react";
import { StyledGuestsPanel, GridRow } from "./GuestsPanel.styled";
import { Counter } from "../counter/Counter";
import { Text } from "../../../atoms/Text/Text";

export const GuestsPanel = ({ show, setInputGuestsValue }) => {
  let [adults, setAdults] = useState(0);
  let [child, setChildren] = useState(0);

  useEffect(() => {
    setInputGuestsValue(adults + child);
  }, [adults, child]);

  const rows = [
    {
      title: "Adults",
      subtitle: "Ages 13 or above",
      value: adults,
      setValue: setAdults,
    },
    {
      title: "Children",
      subtitle: "Ages 2-12",
      value: child,
      setValue: setChildren,
    },
  ];
  return (
    <StyledGuestsPanel show={show}>
      {rows.map((row, index) =>
        cloneElement(
          <GridRow key={index}>
            <Text
              fontFamily="Mulish"
              fontWeight="700"
              fontSize="14px"
              color={({ theme }) => theme.palette.primary.darker}
            >
              {row.title}
            </Text>
            <Text
              fontFamily="Mulish"
              fontWeight="700"
              fontSize="14px"
              color={({ theme }) => theme.palette.primary.light}
            >
              {row.subtitle}
            </Text>
            <Counter value={row.value} setValue={row.setValue} />
          </GridRow>
        )
      )}
    </StyledGuestsPanel>
  );
};
