import "./PageNumberSelector.scss";
import leftArrow from "../../assets/images/prev-button.png";
import rightArrow from "../../assets/images/next-button.png";
import home from "../../assets/images/home-symbol.png";

type PageNumberSelectorProps = {
  handlePageNumberIncrease: () => void;
  handlePageNumberDecrease: () => void;
  handlePageReset: () => void;
  pageNumber: number;
};

const PageNumberSelector = ({
  handlePageNumberIncrease,
  handlePageNumberDecrease,
  handlePageReset,
  pageNumber,
}: PageNumberSelectorProps) => {
  return (
    <div className="page-number__container">
      <div className="page-number__container--display">{pageNumber}</div>
      <div className="page-number__container--functions">
        <img
          src={leftArrow}
          className="page-number__image"
          alt="previous page arrow"
          onClick={handlePageNumberDecrease}
        />
        <img
          src={home}
          alt="Home button"
          className="page-number__image"
          onClick={handlePageReset}
        />
        <img
          src={rightArrow}
          className="page-number__image"
          alt="Next page arrow"
          onClick={handlePageNumberIncrease}
        />
      </div>
    </div>
  );
};

export default PageNumberSelector;
