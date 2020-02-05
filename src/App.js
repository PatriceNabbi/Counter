import React, { useState } from "react";
import Header from "./components/MyHeader/Header";
import CounterPlus from "./components/CounterPlus";
import CounterMinus from "./components/CounterMinus";
import Footer from "./components/MyFooter/Footer";
import Reset from "./components/Reset";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="wrapper">
      <Header />
      <div className="counter">
        <CounterMinus value={counter} minus={setCounter} />
        <p
          style={{
            border: "solid 1px",
            padding: "2px 20px",
            backgroundColor: "#5C48D3",
            color: "white",
            borderRadius: "10px"
          }}
        >
          {counter}
        </p>
        <CounterPlus value={counter} plus={setCounter} />
      </div>

      <div className="reset">
        <Reset reset={setCounter} />
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
