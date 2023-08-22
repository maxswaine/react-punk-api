import "./PageNumberSelector.scss"

type PageNumberSelectorProps = {
  handlePageNumberStart: () => void;
    handlePageNumberIncrease: () => void;
    handlePageNumberDecrease: () => void;
    pageNumber: number;
  };

const PageNumberSelector = ({handlePageNumberStart, handlePageNumberIncrease, handlePageNumberDecrease, pageNumber}: PageNumberSelectorProps) => {
  return (
    <div className="pageNumberContainer" onLoad={handlePageNumberStart}>
      <div
        className="arrow arrow--left"
        onClick={handlePageNumberDecrease}
      >{`<-`}</div>
      <div className="page-number">{pageNumber}</div>
      <div
        className="arrow arrow--right"
        onClick={handlePageNumberIncrease}
      >{`->`}</div>
    </div>
  );
};

export default PageNumberSelector;
