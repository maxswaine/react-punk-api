import "./CardContainer.scss";
import BeerCard from "../Components/BeerCard/BeerCard";
import { Beer } from "../Data/Types";

type CardContainerProps = {
  beers: Beer[];
};

const CardContainer = ({ beers }: CardContainerProps) => {
  return (
    <div className="card-container">
      {beers.map((beer, index) => (
        <BeerCard beer={beer} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
