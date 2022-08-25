import React from "react";
// organism
import Header from "../components/organism/Header";
import PupulerForYou from "../components/organism/PopulerForYou";
import NewRecipe from "../components/organism/NewRecipe";
import PopulerRecipe from "../components/organism/PopulerRecipe";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Article 1 = Pupuler for you */}
      <PupulerForYou />
      {/* Article 2 = New Recipe */}
      <NewRecipe />
      {/* Article 3 = Populer Recipe */}
      <PopulerRecipe />
    </>
  );
}

export default Home;
