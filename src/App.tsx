import React from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="container grid aligin-center mx-auto gap-6 grid-cols-1 xl:grid-cols-4 ">
      <div className="justify-self-center p-4">
        <Card />
      </div>
      <div className="justify-self-center p-4">
        <Card />
      </div>
      <div className="justify-self-center p-4">
        <Card />
      </div>{" "}
      <div className="justify-self-center p-4">
        <Card />
      </div>{" "}
      <div className="justify-self-center p-4">
        <Card />
      </div>{" "}
      <div className="justify-self-center p-4">
        <Card />
      </div>{" "}
      <div className="justify-self-center p-4">
        <Card />
      </div>{" "}
      <div className="justify-self-center p-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
