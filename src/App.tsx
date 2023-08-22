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

  const getBeers = async () => {
    let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=25`;
    const res = await fetch(url);
    const data: Beer[] = await res.json();

    if (searchTerm) {
      const filteredData = data.filter((beer: Beer) => {
        return beer.name.toLowerCase().includes(searchTerm);
      });
      setBeerDisplay(filteredData);
    } else {
      setBeerDisplay(data);
    }
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

  useEffect(() => {
    getBeers();
  }, [pageNumber, searchTerm]);

  return (
    <div className="App">
      <Sidebar handleSearch={handleSearchTerm} searchTerm={searchTerm} />
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
