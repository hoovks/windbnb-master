import styled from "styled-components";

export const StyledInputBox = styled.div`
  display: grid;
  padding-inline: 30px;
  padding-top: 12px;
  border: 1px solid white;

  :hover {
    border-radius: 16px;
    border-color: ${({ theme }) => theme.palette.primary.darker};
  }

  @media only screen and (min-width: 800px) {
    border-right: 1px solid ${({ theme }) => theme.palette.primary.lighter};
  }
`;
