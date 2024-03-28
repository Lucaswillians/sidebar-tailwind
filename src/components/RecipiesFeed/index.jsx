import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";
import fetchRecipes from "../../api/Recipie/index";

const RecipesFeed = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipesData = await fetchRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="flex-grow bg-white p-4 grid grid-cols-1">
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          description={recipe.description}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          img_url={recipe.img_url}
        />
      ))}
    </div>
  );
};

export default RecipesFeed;
