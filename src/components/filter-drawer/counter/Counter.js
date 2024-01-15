import { Text } from "../../../atoms/Text/Text";
import { StyledCounter } from "./Counter.styled";
import { CounterButton } from "./counter-button/CounterButton";

export const Counter = ({ show, value, setValue }) => {
  return (
    <StyledCounter show={show}>
      <CounterButton
        sign="-"
        onClick={() => value > 0 && setValue(value - 1)}
      />
      <Text
        fontFamily="Mulish"
        fontWeight="700"
        fontSize="14px"
        color={({ theme }) => theme.palette.primary.darker}
      >
        {value}
      </Text>
      <CounterButton sign="+" onClick={() => setValue(value + 1)} />
    </StyledCounter>
  );
};
