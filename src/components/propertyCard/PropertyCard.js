import { StyledPropertyCard } from "./PropertyCard.styled";

function PropertyCard() {
  return (
    <StyledPropertyCard>
      <div className="image" />
      <div className="row">
        <span className="superHost">super host</span>
        <span className="type">Entire apartment . 2 beds</span>
        <span className="rate">
          <img
            className="starIcon"
            src={require("../../images/star-icon.png")}
            alt="starIcon"
          />
          4.40
        </span>
      </div>
      <span className="name">Stylist apartment in center of the city</span>
    </StyledPropertyCard>
  );
}

export default PropertyCard;
