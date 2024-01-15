import { StyledGuestsButton } from "./GuestsButton.styled";
import { Text } from "../../../atoms/Text/Text";

export const GuestsButton = ({ onClick, children }) => {
  return (
    <StyledGuestsButton onClick={onClick}>
      <Text
        fontFamily="Mulish"
        fontSize="14px"
        color={({ theme }) => theme.palette.primary.light}
      >
        {children}
      </Text>
    </StyledGuestsButton>
  );
};
