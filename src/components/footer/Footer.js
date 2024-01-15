import { StyledFooter } from "./Footer.styled";
import { Text } from "../../atoms/Text/Text";

export const Footer = ({ author }) => {
  return (
    <StyledFooter>
      <Text
        fontWeight="500"
        fontSize="14px"
        color={({ theme }) => theme.palette.primary.darker}
      >
        created by {author} - devChallenges.io
      </Text>
    </StyledFooter>
  );
};
