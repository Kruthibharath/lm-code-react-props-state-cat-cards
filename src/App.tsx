import "./App.css";
import { useState } from "react";
import Cat from "./data/cat";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { CatCard } from "./components/cat_card";
import { CatImage } from "./components/cat_image";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  const [cats, setCats] = useState<Array<Cat>>([
    {
      name: "Little Miss Purrfect",
      catIndex: 0,
      species: "Cat",
      favFoods: ["wet food", "dry food"],
      birthYear: 2016,
    },
    {
      name: "Mr Gwumpy",
      catIndex: 1,
      species: "Cat",
      favFoods: ["caviar"],
      birthYear: 2016,
    },
    {
      name: "Dopey",
      catIndex: 2,
      species: "Cat",
      favFoods: ["bugs"],
      birthYear: 2018,
    },
    {
      name: "Jumpy",
      catIndex: 3,
      species: "Scaredy Cat",
      favFoods: ["not cucumbers!"],
      birthYear: 2008,
    },
    {
      name: "Meowsalot",
      catIndex: 4,
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
    },
    {
      name: "Cindy Clawford",
      catIndex: 5,
      species: "Cat",
      favFoods: ["mice"],
      birthYear: 2012,
    },
    {
      name: "Katy Purry",
      catIndex: 6,
      species: "Cat",
      favFoods: ["cigarettes", "coffee"],
      birthYear: 2015,
    },
    {
      name: "Dr. Von Belly-Rub",
      catIndex: 7,
      species: "Cat",
      favFoods: ["salt"],
      birthYear: 2020,
    },
    {
      name: "Blobby",
      catIndex: 8,
      species: "Bird?",
      favFoods: ["your soul"],
      birthYear: 2020,
    },
    {
      name: "El Taco",
      catIndex: 9,
      species: "Cat",
      favFoods: ["tequila", "bar snax"],
      birthYear: 1995,
    },
    {
      name: "Nibbles",
      catIndex: 10,
      species: "Hungry Cat",
      favFoods: ["blankets", "feet", "tinsel"],
      birthYear: 2003,
    },
    {
      name: "BoopySnoot",
      catIndex: 11,
      species: "Tiny Cat",
      favFoods: ["milk"],
      birthYear: 2021,
    },
  ]);
  console.log("Our pretties 😻: ", cats);
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="cards__wrapper">
          {cats.map((cat) => (
            <CatCard
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
