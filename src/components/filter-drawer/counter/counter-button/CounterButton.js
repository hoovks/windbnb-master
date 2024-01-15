import { Text } from "../../../../atoms/Text/Text";
import { StyledCounterButton } from "./CounterButton.styled";

export const CounterButton = ({ sign, onClick }) => {
  return (
    <StyledCounterButton onClick={onClick}>
      <Text
        fontFamily="Mulish"
        color={({ theme }) => theme.palette.primary.main}
      >
        {sign}
      </Text>
    </StyledCounterButton>
  );
};
