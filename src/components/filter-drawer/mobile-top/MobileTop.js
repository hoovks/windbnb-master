import { IconWrapper } from "../../icon-wrapper/IconWrapper";
import { Text } from "../../../atoms/Text/Text";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const StyledMobileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 12px;

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

export const MobileTop = ({ handleClose }) => {
  return (
    <StyledMobileTop>
      <Text
        fontFamily="Mulish"
        fontWeight="700"
        fontSize="12px"
        color={({ theme }) => theme.palette.primary.darker}
      >
        Edit your search
      </Text>
      <IconWrapper>
        <CloseIcon onClick={handleClose} />
      </IconWrapper>
    </StyledMobileTop>
  );
};
