import React from "react";
import logo from "./logo.svg";
import "./App.css";
//Share
import TopNav from "./Components/Shared/Nav/TopNav";

//Paged
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home/>
    </div>
  );
}

export default App;
