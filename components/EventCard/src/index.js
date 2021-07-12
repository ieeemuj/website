import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Card2 from "./Card2";
import "./styles.css";
import "./card_style.css";

import Sdata from "./Sdata";   

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function event_card(val)
{
  return(
    <Card2
     key={val.key}
      img={val.img}
      category={val.category}
      title={val.title}
      desc={val.desc}
      more={val.more}
    />
  );
}

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Upcoming Event</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {Sdata.map(event_card)}
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
