import { Beer } from "../Data/Types";
import "./BeerShowCard.scss";

type BeerShowCardProps = {
  beer: Beer;
};

const BeerShowCard = ({ beer }: BeerShowCardProps) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img className="back__image" src={beer.image_url} alt="Beer" />
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
            <small className="badge">{beer.abv}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Name of the thing</strong>
                </p>
              </div>
              <p className="card-footer">{beer.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerShowCard;
