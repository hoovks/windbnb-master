import StarRateIcon from "@mui/icons-material/StarRate";
import { StyledRate } from "./Rate.styled";
import { Text } from "../../../atoms/Text/Text";

export const Rate = ({ rate }) => {
  return (
    <StyledRate>
      <StarRateIcon fontSize="small" sx={{ color: "accent.main" }} />
      <Text
        fontWeight="500"
        fontSize="14px"
        color={({ theme }) => theme.palette.primary.dark}
      >
        {rate}
      </Text>
    </StyledRate>
  );
};
