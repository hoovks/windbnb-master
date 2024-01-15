import styled from "styled-components";

export const StyledCaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-block: 24px;

  @media only screen and (min-width: 800px) {
    padding-block: 32px;
  }
`;
