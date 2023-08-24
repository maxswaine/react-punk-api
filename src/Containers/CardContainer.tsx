import "./CardContainer.scss";
import { Beer } from "../Data/Types";
import BeerShowCard from "../Components/BeerShowCard/BeerShowCard";

type CardContainerProps = {
  beers: Beer[];
};

const CardContainer = ({ beers }: CardContainerProps) => {
  return (
    <div className="card-container">
      {beers.map((beer, index) => (
        <BeerShowCard beer={beer} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
