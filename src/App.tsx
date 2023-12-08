import "./App.css";
import { useState } from "react";
import Cat from "./data/cat";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  const [catData, setCatData] = useState();
  return (
    <>
      <Navbar />
      <Header />

      <main>
        <div className="cards__wrapper">{/* JSX code can go here */}</div>
      </main>

      <Footer />
    </>
  );
}

export default App;
