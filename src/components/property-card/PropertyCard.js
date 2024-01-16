import {
  Img,
  FlexRow,
  SuperHost,
  StyledPropertyCard,
} from "./PropertyCard.styled";
import { Rate } from "./rate/Rate";
import { Type } from "./type/Type";
import { Text } from "../../atoms/Text/Text";

export const PropertyCard = ({ image, superHost, type, rate, name }) => {
  return (
    <StyledPropertyCard>
      <Img image={image} />

      <FlexRow>
        {superHost && (
          <SuperHost>
            <Text
              fontWeight="700"
              fontSize="10px"
              textTransform="uppercase"
              color={({ theme }) => theme.palette.primary.dark}
            >
              super host
            </Text>
          </SuperHost>
        )}
        <Type type={type} />
        <Rate rate={rate} />
      </FlexRow>
      <Text
        fontWeight="600"
        fontSize="14px"
        color={({ theme }) => theme.palette.primary.darker}
      >
        {name}
      </Text>
    </StyledPropertyCard>
  );
};
