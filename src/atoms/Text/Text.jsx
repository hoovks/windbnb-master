import styled from "styled-components";

export const Text = ({
  children,
  fontSize,
  fontWeight,
  fontFamily,
  color,
  textTransform,
}) => {
  return (
    <StyledText
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      textTransform={textTransform}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Montserrat")};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  text-transform: ${({ textTransform }) => textTransform};
`;
