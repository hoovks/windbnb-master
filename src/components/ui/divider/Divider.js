import styled from "styled-components";

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.lighter};

  @media only screen and (min-width: 800px) {
    display: ${(props) => (props.mobile ? "none" : "block")};
  }
`;

export const VerticalDivider = styled(Divider)`
  width: 1px;
  height: auto;
`;

export const HorizontalDivider = styled(Divider)`
  width: 100%;
  height: 1px;
`;
