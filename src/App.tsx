import { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardContainer from "./Containers/CardContainer";
import { Beer } from "./Data/Types";
import PageNumberSelector from "./Components/PageNumberSelector/PageNumberSelector";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [beerDisplay, setBeerDisplay] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [urlFilters, setUrlFilters] = useState<Record<string, boolean>>({
    ABV: false,
    classic: false,
    acid: false,
  });

  const highAcidityCondition = 4;

  const getBeers = async () => {
    let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=25`;

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
    if (pageNumber >= 1 && pageNumber <= 10) {
      setPageNumber(pageNumber + 1);
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

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterLabel: string) => {
    setUrlFilters((prevUrlFilters) => ({
      ...prevUrlFilters,
      [filterLabel]: !prevUrlFilters[filterLabel],
    }));
  };

  useEffect(() => {
    getBeers();
  }, [pageNumber, searchTerm, urlFilters]);

  return (
    <div className="App">
      <Sidebar
        handleSearch={handleSearchTerm}
        searchTerm={searchTerm}
        handleFilterChange={handleFilterChange}
        filterStates={urlFilters}
      />
      <CardContainer beers={beerDisplay} />
      <PageNumberSelector
        handlePageNumberDecrease={handlePageNumberDecrease}
        handlePageNumberIncrease={handlePageNumberIncrease}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
