import styled from "styled-components";

export const StyledFilterDrawer = styled.div`
  display: grid;
  grid-template-rows: 50px 115px;
  position: fixed;
  min-width: 100%;
  height: 630px;
  top: 0;
  left: ${(props) => (props.active ? "-100%" : "0")};

  background-color: ${({ theme }) => theme.palette.background.main};
  transition: 1s ease;

  @media only screen and (min-width: 800px) {
    grid-template-rows: 150px auto;
    grid-template-columns: repeat(3, 1fr);
    top: ${(props) => props.active && "-100%"};
    left: 0;
    min-height: 460px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  align-items: space-around;

  @media only screen and (min-width: 800px) {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    margin-inline: 95px;
  }
`;
