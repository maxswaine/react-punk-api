import { Beer } from "../../Data/Types";
import "./BeerCard.scss";

type BeerCardProps = {
  beer: Beer;
};

const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <div className="beer-card" key={beer.id}>
      <div className="beer-card__display">
        <img
          className="beer-card__image"
          src={beer.image_url}
          alt={`${beer.name} Beer`}
        />
        <h2 className="beer-card__name">{beer.name}</h2>{" "}
        <h3 className="beer-card__tagline">{beer.tagline}</h3>
      </div>
      <div className="beer-card__info">
        <p className="beer-card__description">{beer.description}</p>
        <h4 className="beer-card__abv">
          ABV: <span className="beer-card__abv-value">{beer.abv}</span>
        </h4>
        <h4 className="beer-card__food-heading">Food Pairings:</h4>
        <ul className="beer-card__food-list">
          {beer.food_pairing.map((food, index) => (
            <li className="beer-card__food-item" key={index}>
              {food}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
