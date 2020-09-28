import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="0001"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
        <Product
          id="0002"
          title="Cuisinart SM-48RC Precision Master Petite 4.5 Qt Stand Mixer, Red"
          price={247.49}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61sVtNJROSL._AC_SL1200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0003"
          title="Samsung Galaxy Watch 46mm Silver/Black"
          price={329.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71JFZIVQy1L._AC_SL1500_.jpg"
        />
        <Product
          id="0004"
          title="Echo Plus (2nd gen) – Premium sound with built-in smart home hub - Charcoal"
          price={199.49}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61S20ybHHHL._AC_SL1000_.jpg"
        />
        <Product
          id="0005"
          title="Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray"
          price={729.49}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51y5AX6aOCL._AC_SL1024_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0006"
          title="Samsung LC49RG90SSNXZA 49inch QLED 120Hz HDR1000 WQHD Curved Super Wide 32:9 Gaming Monitor"
          price={1245.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
