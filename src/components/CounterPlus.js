import React, { useState } from "react";

function CounterPlus(props) {
  //   console.log(props.CounterPlus);

  return (
    <button
      style={{
        border: "none",
        fontSize: "100px",
        heigh: "10px",
        width: "36px"
      }}
      onClick={() => {
        props.plus(props.value + 1);
      }}
    >
      +
    </button>
  );
}

export default CounterPlus;
