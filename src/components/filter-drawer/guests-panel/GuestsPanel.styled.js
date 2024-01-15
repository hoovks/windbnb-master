import styled from "styled-components";

export const StyledGuestsPanel = styled.div`
  display: ${(props) => (props.show ? "grid" : "none")};

  @media only screen and (min-width: 800px) {
    grid-column-start: 2;
  }
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px 10px 30px;
  align-content: center;
`;
