import "./App.css";
import { useState } from "react";
import Cat from "./data/cat";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { CatCard } from "./components/cat_card";
import { catData, images } from "./data/cat_data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catsCount = cats.length;
  return (
    <>
      <Navbar />
      <Header catsCount={catsCount} />
      <main>
        <div className="cards__wrapper">
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              catIndex={cat.catIndex}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
