import "./PageNumberSelector.scss";

type PageNumberSelectorProps = {
  handlePageNumberIncrease: () => void;
  handlePageNumberDecrease: () => void;
  pageNumber: number;
};

const PageNumberSelector = ({
  handlePageNumberIncrease,
  handlePageNumberDecrease,
  pageNumber,
}: PageNumberSelectorProps) => {
  return (
    <div className="pageNumberContainer">
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
