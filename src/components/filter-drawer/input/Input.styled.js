import styled from "styled-components";

export const Input = styled.input`
  margin-top: 4px;
  margin-bottom: 12px;
  padding-left: 0;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  :disabled {
    background-color: transparent;
  }
`;
