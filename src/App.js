import "./App.css";
import { useState } from "react";
import IngredientForm from "./components/IngredientForm";

function App() {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    ingredients: {
      ingredient1: {
        name: "",
        qty: 1,
        unit: "",
        bulkQty: 1,
        bulkUnit: "",
        bulkCost: 0,
      },
      ingredient2: {
        name: "",
        qty: 1,
        unit: "",
        bulkQty: 1,
        bulkUnit: "",
        bulkCost: 0,
      },
      ingredient3: {
        name: "",
        qty: 1,
        unit: "",
        bulkQty: 1,
        bulkUnit: "",
        bulkCost: 0,
      },
    },
    recipeCost: 0,
    ingredientNum: 3,
  });

  // for (let key of Object.keys(recipe.ingredients)) {
  //   console.log(
  //     key + " -> " + recipe.ingredients[key],
  //     recipe.ingredients[key]
  //   );
  // }

  const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  };

  function determineRecipeCost(recipe) {
    let recipeCost = 0;

    for (let key of Object.keys(recipe.ingredients)) {
      let ingredient = recipe.ingredients[key];

      let x = ingredient.bulkQty / ingredient.qty;
      let ingredientCost = ingredient.bulkCost / x;
      recipeCost += ingredientCost;
    }

    // let ingredients = [
    //   recipe.ingredients.ingredient1,
    //   recipe.ingredients.ingredient2,
    //   recipe.ingredients.ingredient3,
    // ];

    // ingredients.forEach((ingredient) => {
    //   let x = ingredient.bulkQty / ingredient.qty;
    //   let ingredientCost = ingredient.bulkCost / x;
    //   recipeCost += ingredientCost;
    // });

    recipeCost = round(recipeCost, 2);

    console.log(recipeCost);
    setRecipe({
      ...recipe,
      recipeCost: recipeCost,
    });
    return recipeCost;
  }

  const children = [];
  const ingredientArray = [];
  let numChildren = recipe.ingredientNum;

  for (let i = 0; i < numChildren; i += 1) {
    let ingredientNum = i + 1;
    let ingredientNumString = "ingredient" + ingredientNum;
    ingredientArray.push({
      [ingredientNumString]: {
        name: "",
        qty: 1,
        unit: "",
        bulkQty: 1,
        bulkUnit: "",
        bulkCost: 0,
      },
    });
    children.push(
      <IngredientForm
        key={i}
        recipe={recipe}
        setRecipe={setRecipe}
        ingredientNumber={i + 1}
      />
    );
  }

  const addIngredient = () => {
    console.log("sup");
    const newRecipeNum = recipe.ingredientNum + 1;
    setRecipe({
      ...recipe,
      ingredients: {
        ...recipe.ingredients,
        ["ingredient" + newRecipeNum]: {
          name: "",
          qty: 1,
          unit: "",
          bulkQty: 1,
          bulkUnit: "",
          bulkCost: 0,
        },
      },
      ingredientNum: (recipe.ingredientNum += 1),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    determineRecipeCost(recipe);
    console.log(recipe);
  };

  return (
    <div className="App">
      <header>
        <h1>Recipe Costing App</h1>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Recipe Basics</legend>
          <p className="form__ingredient-inputs">
            <label htmlFor="recipe-name">Recipe Name</label>
            <input
              name="recipe-name"
              type="text"
              id="recipe-name"
              value={recipe.recipeName}
              onChange={(e) =>
                setRecipe({
                  ...recipe,
                  recipeName: e.target.value,
                })
              }
            />
          </p>
        </fieldset>
        <fieldset>
          <legend>Recipe Ingredients</legend>
          {children}
        </fieldset>
        {/* <input type="submit" /> */}
        <button className="form__submit-btn">Submit</button>
      </form>
      <button className="form__submit-btn" onClick={() => addIngredient()}>
        Add Ingredient
      </button>
      <div className="recipe-costing-results">
        <h3>{recipe.recipeName || "Recipe Name"}</h3>
        <p>Total Recipe Cost: ${recipe.recipeCost}</p>
      </div>
      <footer>
        <small>Copyright by Erick Esqueda. All Rights Reserved.</small>
      </footer>
    </div>
  );
}

export default App;
