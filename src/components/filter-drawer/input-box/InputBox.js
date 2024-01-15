import { StyledInputBox } from "./InputBox.styled";
import { Text } from "../../../atoms/Text/Text";

export const InputBox = ({ children, onClick, label }) => {
  return (
    <StyledInputBox onClick={onClick}>
      <Text
        fontFamily="Mulish"
        fontWeight="800"
        fontSize="9px"
        color={({ theme }) => theme.palette.primary.darker}
        textTransform="uppercase"
      >
        {label}
      </Text>
      {children}
    </StyledInputBox>
  );
};
