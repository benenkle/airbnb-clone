import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={require("./img/card1.jpg")}
          title="Online Experience"
          description="Unique activities we ca do together, led by a world of hosts."
        />
        <Card
          src={require("./img/card2.jpg")}
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src={require("./img/card3.jpg")}
          title="Entire Homes"
          description="Comfortable private places, with rooms for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src={require("./img/card4.jpg")}
          title="3 Bedroom Flat in London"
          description="Super host with a stunning view of the beachside in sunny London"
          price="£130/night"
        />
        <Card
          src={require("./img/card5.jpg")}
          title="Penthouse in Sydney"
          description="Enjoy the amazing sights of Sydney with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src={require("./img/card6.jpg")}
          title="1 Bedroom Apartment"
          description="Superhost with great amenities and a fabulous shopping comple nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
};

export default Home;
