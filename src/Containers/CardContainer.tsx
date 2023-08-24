import "./CardContainer.scss";
import { Beer } from "../Data/Types";
import BeerShowCard from "../Components/BeerShowCard/BeerShowCard";
import { Link } from "react-router-dom";

type CardContainerProps = {
  beers: Beer[];
};

const CardContainer = ({ beers }: CardContainerProps) => {
  return (
    <div className="card-container">
      {beers.map((beer) => (
        <Link to={`/beers/${beer.id}`} key={beer.id} >
          <div className="card">
            <BeerShowCard beer={beer} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
