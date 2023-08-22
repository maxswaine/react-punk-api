import { useState } from "react";
import "./CardContainer.scss";
import { Beer } from "../Data/Types";
import BeerShowCard from "../Components/BeerShowCard/BeerShowCard";
import PageNumberSelector from "../Components/PageNumberSelector/PageNumberSelector";

const CardContainer = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [beerDisplay, setBeerDisplay] = useState<Beer[]>([]);

  const getBeers = async () => {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=25`
    );
    const data = await res.json();
    console.log(data);
    setBeerDisplay(data);
  };

  const handlePageStart = () => {
    getBeers;
  };
  const handlePageNumberIncrease = () => {
    if (pageNumber >= 1 && pageNumber <= 10) {
      setPageNumber(pageNumber + 1);
      getBeers();
    }
  };
  const handlePageNumberDecrease = () => {
    if (pageNumber === 1) {
      setPageNumber(1);
      getBeers();
    } else {
      setPageNumber(pageNumber - 1);
      getBeers();
      console.log(beerDisplay);
    }
  };

  return (
    <div className="card-container">
      {beerDisplay.map((beer, index) => (
        <BeerShowCard beer={beer} key={index} />
      ))}
      <PageNumberSelector
        handlePageNumberStart={handlePageStart}
        handlePageNumberIncrease={handlePageNumberIncrease}
        handlePageNumberDecrease={handlePageNumberDecrease}
        pageNumber={pageNumber}
      />{" "}
    </div>
  );
};

export default CardContainer;
