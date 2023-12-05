import React from "react";
import Header from "./components/Header/header.component";
import "./App.css";
import Banner from "./components/Banner/banner.component";
import OurPartners from "./components/OurPartners/ourpartners.component";
import Reviews from "./components/Reviews/reviews.component";
import Application from "./components/Application/application.component";
import Footer from "./components/Footer/footer.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <OurPartners />
      <Reviews />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
