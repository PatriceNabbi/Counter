import React, { useState } from "react";

function CounterMinus(props) {
  //   console.log(props.CounterPlus);

  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "none",
        fontSize: "100px"
      }}
      onClick={() => {
        props.minus(props.value - 1);
      }}
    >
      -
    </button>
  );
}

export default CounterMinus;
