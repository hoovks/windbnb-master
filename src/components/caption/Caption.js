import { StyledCaption } from "./Caption.styled";
import { Text } from "../../atoms/Text/Text";

export const Caption = ({ totalRecords, country }) => {
  return (
    <StyledCaption>
      <Text
        fontWeight="700"
        fontSize="24px"
        color={({ theme }) => theme.palette.primary.darker}
      >
        Stays in {country}
      </Text>
      <Text
        fontWeight="500"
        fontSize="14px"
        color={({ theme }) => theme.palette.primary.dark}
      >
        {totalRecords} stays
      </Text>
    </StyledCaption>
  );
};
