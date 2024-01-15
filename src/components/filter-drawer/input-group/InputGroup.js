import styled from "styled-components";

const StyledInputGroup = styled.div`
  display: grid;
  margin-inline: 12px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  @media only screen and (min-width: 800px) {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    align-self: end;
    margin-inline: 95px;
  }
`;

export const InputGroup = ({ children }) => {
  return <StyledInputGroup>{children}</StyledInputGroup>;
};
