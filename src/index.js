import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const root = document.getElementById("root");
const tooltipElement = document.getElementById("tooltip");

const Tooltip = ({ children }) => {
  return ReactDOM.createPortal(children, tooltipElement);
};

const Portal = () => {
  const [tooltip, setTooltip] = useState("sin tooltip");

  const handleClick = (value) => {
    setTooltip(value);
  };

  return (
    <div>
      <Rating />
      <Button handleClick={(e) => handleClick(e)} id={1} />
      <Button handleClick={(e) => handleClick(e)} id={2} />

      <Tooltip>
        <p>tooltip: {tooltip}</p>
      </Tooltip>
    </div>
  );
};

const Button = ({ handleClick, id }) => {
  return (
    <button onClick={() => handleClick(`tooltip-${id}`)}>
      Click tooltip {id}
    </button>
  );
};

const Rating = () => {
  const [stars, setStars] = useState(0);

  // const handleClick = (e) => {
  //   let spans = document.querySelectorAll('span')
  //   let { target } = e;
  //   let startId = target.id

  //   for(let i = 0; i < spans.length; i++){
  //     if(spans[i].id === startId){
  //       spans[i].className === "" ? spans[i].className = "active" : spans[i].className = ""
  //       return
  //     }else{
  //       target.className === "" ? spans[i].className = "active" : spans[i].className = ""
  //     }
  //   }
  // }

  return (
    <div id="rating">
      <span
        id="uno"
        onClick={() => (stars === 1 ? setStars(0) : setStars(1))}
        className={stars >= 1 ? "active" : ""}
      >
        *
      </span>
      <span
        id="dos"
        onClick={() => (stars === 2 ? setStars(0) : setStars(2))}
        className={stars >= 2 ? "active" : ""}
      >
        *
      </span>
      <span
        id="tres"
        onClick={() => (stars === 3 ? setStars(0) : setStars(3))}
        className={stars >= 3 ? "active" : ""}
      >
        *
      </span>
      <span
        id="cuatro"
        onClick={() => (stars === 4 ? setStars(0) : setStars(4))}
        className={stars >= 4 ? "active" : ""}
      >
        *
      </span>
      <span
        id="cinco"
        onClick={() => (stars === 5 ? setStars(0) : setStars(5))}
        className={stars >= 5 ? "active" : ""}
      >
        *
      </span>
    </div>
  );
};

ReactDOM.render(<Portal />, root);
