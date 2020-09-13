import React from "react";
import data from "./data/imageData.json";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import horizontalCss from "./Card.css";

function Card() {
  return (
    <Slider classNames={horizontalCss} autoplay={3000}>
      {data.map((item, index) => (
        <div key={item.id} >
          <img className="home__image" src={item.url} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default Card;
