import styled from "styled-components";

export const StyledApartmentsContainer = styled.div`
  display: grid;
  grid-gap: 32px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-row-gap: 48px;
  }
`;

export const ApartmentsContainer = ({ children }) => {
  return <StyledApartmentsContainer>{children}</StyledApartmentsContainer>;
};
