import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../../Containers/CardContainer";
import PageNumberSelector from "../PageNumberSelector/PageNumberSelector";
import { Beer } from "../../Data/Types";
import "./HomePage.scss"

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [beerDisplay, setBeerDisplay] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [urlFilters, setUrlFilters] = useState<Record<string, boolean>>({
    ABV: false,
    classic: false,
    acid: false,
  });

  const highAcidityCondition = 4;
  const itemsPerPage = 25;

  const getBeers = async () => {
    let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${itemsPerPage}`;

    urlFilters.ABV
      ? (url += "&abv_gt=6")
      : (url = url.replace("&abv_gt=6", ""));
    urlFilters.classic
      ? (url += "&brewed_before=01-2010")
      : (url = url.replace("&brewed_before=01-2010", ""));

    if (searchTerm) {
      url += `&beer_name=${searchTerm}`;
    }

    const res = await fetch(url);
    const data: Beer[] = await res.json();

    let filteredData = data;

    if (urlFilters.acid) {
      filteredData = filteredData.filter(
        (beer: Beer) => beer.ph <= highAcidityCondition
      );
    }

    setBeerDisplay(filteredData);
  };

  const handlePageNumberIncrease = () => {
    if (pageNumber >= 1 && beerDisplay.length > 0) {
      setPageNumber(pageNumber + 1);
    } else if (beerDisplay.length === 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handlePageNumberDecrease = () => {
    if (pageNumber === 1) {
      setPageNumber(1);
      getBeers();
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const handlePageReset = () => {
    setPageNumber(1);
  };

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterLabel: string) => {
    setUrlFilters((prevUrlFilters: { [x: string]: any }) => ({
      ...prevUrlFilters,
      [filterLabel]: !prevUrlFilters[filterLabel],
    }));
  };

  useEffect(() => {
    getBeers();
  }, [pageNumber, searchTerm, urlFilters]);
  return (
    <div className="homepage">
      <div className="sidebar">
        <Sidebar
          handleSearch={handleSearchTerm}
          searchTerm={searchTerm}
          handleFilterChange={handleFilterChange}
          filterStates={urlFilters}
        />
      </div>
      <div className="card-container">
        <CardContainer beers={beerDisplay} />
      </div>
      <div className="page-selector">
        <PageNumberSelector
          handlePageNumberDecrease={handlePageNumberDecrease}
          handlePageNumberIncrease={handlePageNumberIncrease}
          handlePageReset={handlePageReset}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
};

export default HomePage;
