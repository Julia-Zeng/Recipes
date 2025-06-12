import React, { useEffect, useState } from "react";
import styles from "./ContentGrid.module.css";
import CardMain from "../cardMain/CardMain";

const ContentGrid = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes); // recipes Array
      } catch (error) {
        console.error("Error al obtener recetas:", error);
      }
    };

    getRecipes();
  }, []);
  console.log(recipes);

  return (
    <main className={styles.contentGridContainer}>
      {recipes.map((r) => (
        <CardMain
          key={r.id}
          id={r.id}
          name={r.name}
          cardImg={r.image}
          cookTimeMinutes={r.cookTimeMinutes}
          difficulty={r.difficulty}
        />
      ))}
    </main>
  );
};

export default ContentGrid;