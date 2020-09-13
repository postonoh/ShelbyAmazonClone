import React from "react";
import "./Home.css";
import Product from "./Product";
import Card from "./Card";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Card />
      </div>

      <div className="home__row">
        <Product 
        id="92051721"
        title="Learning React: Modern Patterns for Developing React Apps 2nd Edition"
        price={39.21}
        image='https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UL320_.jpg'
        rating={4}
        />
        <Product
        id="16546215"
        title='TomCare Solar Lights Upgraded, Waterproof Flickering Flames Torches Lights Outdoor Solar Spotlights Landscape Decoration Lighting Dusk to Dawn Auto On/Off Security Torch Light for Patio Driveway (4)'
        price={76.99}
        image='https://images-na.ssl-images-amazon.com/images/I/71KcesITPpL._AC_SX522_.jpg'
        rating={5}
        />
      </div>
      <div className="home__row">
        <Product 
        id="654684165"
        title="Nike Men's Revolution 5 Running Shoe"
        price={102.99}
        image="https://m.media-amazon.com/images/I/41Iccs8Q8cL._AC_SL260_.jpg"
        rating={3}
        />
       <Product id="4546"
        title='Fullstack React: The Complete Guide to ReactJS and Friends'
        price={59.79}
        image="https://images-na.ssl-images-amazon.com/images/I/51CMUOgy8HL._SX384_BO1,204,203,200_.jpg"
        rating={4}
		/>
        <Product 
		id="46546"
        title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
        price={299.99}
        image="https://m.media-amazon.com/images/I/51sAtKgDkDL._AC_UY218_.jpg"
        rating={4}
		/>
      </div>
      <div className="home__row">
        <Product 
		id="548685"
        title="EleTab Dual Monitor Mount Stand Full Motion Swivel Gas Spring LCD Arm Fits for 2 Computer Screens 13 to 32 inches - Each Arm Holds up to 19.8 lbs"
        price={219.99}
        image="https://images-na.ssl-images-amazon.com/images/I/71tpH8%2BfEzL._AC_SX679_.jpg"
        rating={2}
		/>
      </div>
    </div>
  );
}

export default Home;
