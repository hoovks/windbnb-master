import { StyledType } from "./Type.styled";
import { Text } from "../../../atoms/Text/Text";

export const Type = ({ type }) => {
  return (
    <StyledType>
      <Text
        fontWeight="500"
        fontSize="12px"
        color={({ theme }) => theme.palette.primary.main}
      >
        {type}
      </Text>
    </StyledType>
  );
};
