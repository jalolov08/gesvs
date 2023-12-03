import React from "react";
import Header from "./components/Header/header.component";
import "./App.css";
import Banner from "./components/Banner/banner.component";
import OurPartners from "./components/OurPartners/ourpartners.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <OurPartners />
    </div>
  );
}

export default App;
