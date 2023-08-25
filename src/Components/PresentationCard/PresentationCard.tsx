import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Beer } from "../../Data/Types";
import "./PresentationCard.scss";
import beerGIF from "../../assets/images/defgbz7-95af22ce-11e0-4ef6-9a76-4f2041f80d90.gif";
import exitButton from "../../assets/images/close-square-svgrepo-com.svg";

type PresentationCardProps = {
  getSingleBeer: (id: number) => Promise<Beer>;
};

const PresentationCard = ({ getSingleBeer }: PresentationCardProps) => {
  const [beer, setBeer] = useState<Beer | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchBeer = async () => {
      if (id !== undefined) {
        const beerData = await getSingleBeer(parseInt(id, 10));
        console.log(beerData);
        setBeer(beerData);
      }
    };

    fetchBeer();
  }, [id, getSingleBeer]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  const lastSentenceIndex = beer.description.indexOf(".", 200);
  let shortenedText =
    beer.description.substring(0, lastSentenceIndex) ?? "No description given";

  if (!shortenedText) {
    shortenedText =
      "Brewdog does not have a description for this beer but it's damn delicious";
  }
  return (
    <div className="presentation-card__container">
      <div className="presentation-card__display">
        <div className="presentation-card__side">
          <img
            src={beerGIF}
            alt="beer gif"
            className="presentation-card__image--side"
          />
          <img
            src={beerGIF}
            alt="beer gif"
            className="presentation-card__image--side"
          />
          <img
            src={beerGIF}
            alt="beer gif"
            className="presentation-card__image--side"
          />
        </div>
        <div className="presentation-card__info">
          <div className="presentation-card__header">
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
          <div className="presentation-card__content">
            <div className="presentation-card__details">
              <p>First Brewed: {beer.first_brewed}</p>
              <br></br>
              <br />
              <p>Description: {shortenedText}</p>
              <br />
              <p>pH: {beer.ph}</p> <br></br>
              <p>{`IBU (International Bitterness Units): ${beer.ibu}`}</p>
              <br></br>
              <p>Food Pairings:</p>
              <ul>
                {beer.food_pairing.map((food) => {
                  return <li key={food}>{food}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="presentation-card__side">
          <img
            src={beerGIF}
            alt="beer gif"
            className="presentation-card__image--side"
          />
          <img
            src={beerGIF}
            alt="beer gif"
            className="presentation-card__image--side"
          />
          <img
            src={beerGIF}
            alt="beer gif"
            className="presentation-card__image--side"
          />
        </div>
        <div className="exit-button">
          <Link to="/">
            <img
              src={exitButton}
              alt="exit button"
              className="exit-button__image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
