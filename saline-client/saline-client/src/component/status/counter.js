import React, { useState } from "react";
import "./counter.css"; // import the CSS file
function IncrementDecrementButton(pass) {
  const [count, setCount] = useState(pass.count);
  const incrementCount = () => {
    console.log("Increment",count);
    setCount(count + 1);
    console.log(count);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="outer">
    <div className="var">

      <button className="increment-button digit" onClick={decrementCount}>
       -
      </button>
      <span className="digit">{count}</span>
      <button className="decrement-button digit" onClick={incrementCount}>
        +
      </button>
      
    </div>
    <div className="lbel ctr">{pass.label}</div>
    </div>
  );
}

export default IncrementDecrementButton;