import React from "react";

// components
import  MyNavbar  from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.components";
import TitleMessage from "./components/title-message/title-message.component";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
    </div>
  );
}

export default App;
