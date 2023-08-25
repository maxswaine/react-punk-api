import { Link, useNavigate } from "react-router-dom";
import { Beer } from "../../Data/Types";
import "./BeerShowCard.scss";

type BeerShowCardProps = {
  beer: Beer;
};

const BeerShowCard = ({ beer }: BeerShowCardProps) => {
  let photo = beer.image_url;
  if (photo === undefined) {
    return (photo = "Sorry, no photo attached");
  }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/beers/${beer.id}`);
  };

  const firstLetterToLower = (description: string): string => {
    if (description.length === 0) {
      return description;
    }

    const firstLetter = description[0];
    const restOfString = description.slice(1);
    const modifiedString = firstLetter.toLowerCase() + restOfString;

    return modifiedString;
  };
  return (
    <Link to={`/beers/${beer.id}`} onClick={handleClick}>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back__content">
              <img className="back__image" src={photo} alt="Beer" />
              <strong className="back__header">{beer.name}</strong>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>

            <div className="front-content">
              <small className="badge">{`${beer.abv}%  ABV`}</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>{beer.name}</strong>
                  </p>
                </div>
                <p className="card-footer">{beer.tagline}</p>
                <p className="card__description">
                  The Brewer advises {firstLetterToLower(beer.brewers_tips)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BeerShowCard;
