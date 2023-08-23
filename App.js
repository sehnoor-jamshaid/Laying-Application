import React from "react";
import ReactDom from "react-dom/client";
import Logo from "./images/logo.png";
import CardImage from "./images/card.webp";
import Rest from './restuarants.js';
const root = ReactDom.createRoot(document.getElementById("root"));
console.log("Rest",Rest.map((val)=>val.info))
const json = [
  { id:"1",
    img: { CardImage },
    title: "Meghana Foods",
    rating: "4.4 Rating",
    amt: "200",
  },
  { id:"2",
    img: { CardImage },
    title: "Meghana Foods",
    rating: "4.4 Rating",
    amt: "200",
  },
  {id:"3",
    img: { CardImage },
    title: "Meghana Foods",
    rating: "4.4 Rating",
    amt: "200",
  },
  { id:"4",
    img: { CardImage },
    title: "Meghana Foods",
    rating: "4.4 Rating",
    amt: "500",
  },
];
const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img src={Logo} alt="logo" className="image_logo" />
      </div>
      <div className="menu_items_cont">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Cards = ({data}) => {
  const {rating,amt,title}=data
  console.log(rating)
  return (
    <div className="card-container">
      <div className="img_cont">
        <img alt="card" src={CardImage} className="image" />
      </div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="content_cont">
        <p>{rating}</p>
        <p>{amt}-Rs</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body_container">
      <div>
        <input className="search" placeholder="Search" />
      </div>
      <div className="cards_flex">
        {json.map((val, ind) => (
          <Cards data={val} key={ind}/>
        ))}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
root.render(<App />);
