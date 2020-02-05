import React, { useState } from "react";

function Reset(props) {
  return (
    <div className="button">
      <button
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          margin: "0 auto",
          backgroundColor: "#5C48D3",
          borderRadius: "10px",
          color: "white",
          padding: "5px 15px"
        }}
        onClick={() => {
          props.reset(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
