import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
// import CatCard from "../catCard/CatCard";
// import { cards } from "../../data";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
        {/* <Slider dots>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider> */}
        {/* <Slider slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default Slide;
