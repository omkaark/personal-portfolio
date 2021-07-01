import React from "react";

import "./App.css";

import Homepage from "./pages/Homepage";

import Header from "./components/Header";
import StickySocialBar from "./components/StickySocialBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <StickySocialBar />
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
