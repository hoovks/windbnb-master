import styled, { css } from "styled-components";

const buttonHoverBackgroundColor = "rgba(235, 87, 87)";

export const StyledSearchButton = styled.button`
  display: none;
  align-items: center;
  align-self: end;
  justify-self: center;
  justify-content: center;
  min-width: 126px;
  min-height: 48px;
  margin-bottom: ${(props) => (props.desktop ? "" : "25px")};

  background-color: ${(props) => props.theme.palette.accent.main};

  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  border: none;
  color: ${({ theme }) => theme.palette.primary.lighter};

  transition: 0.3s ease;

  @media only screen and (min-width: 800px) {
    ${(props) =>
      props.desktop &&
      css`
        display: flex;
        align-self: center;
      `}
  }

  :hover {
    font-size: 16px;
    background: ${buttonHoverBackgroundColor};
  }
`;
