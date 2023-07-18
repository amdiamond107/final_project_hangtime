import '../normalize.css';
import '../bootstrap.min.css';
import '../App.css';
import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
