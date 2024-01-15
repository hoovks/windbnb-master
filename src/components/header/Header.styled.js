import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;
  grid-template-rows: 62px 81px;
  align-items: center;

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 118px;
    justify-content: space-between;
  }
`;
