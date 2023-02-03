import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 August to 30 August · 2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img={require("./img/card2.jpg")}
        location="A Willow in Pembroke, Wales"
        title="Billed as the ultimate in luxury glamping"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - WiFi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />
      <SearchResult
        img={require("./img/card2-2.jpg")}
        location="A Willow in Pembroke, Wales"
        title="The Willow is an amazing little structure"
        description="Perfect for a relaxing break close to the mesmerising Pembrokeshire coast in Wales."
        star={4.3}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img={require("./img/card2-3.JPG")}
        location="A Willow in Pembroke, Wales"
        title="The Willow is an amazing little structure"
        description="Perfect for a relaxing break close to the mesmerising Pembrokeshire coast in Wales."
        star={4.1}
        price="£40 / night"
        total="£157 total"
      />
      <SearchResult
        img={require("./img/card2-4.JPG")}
        location="A Willow in Pembroke, Wales"
        title="The Willow is an amazing little structure"
        description="Perfect getaway with everything you would need to feel at home."
        star={5.0}
        price="£55 / night"
        total="£320 total"
      />
    </div>
  );
};

export default SearchPage;
