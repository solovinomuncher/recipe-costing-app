// import "./App.css";

function IngredientForm(props) {
  const recipe = props.recipe;
  const setRecipe = props.setRecipe;
  const ingredientNumber = "ingredient" + props.ingredientNumber;

  return (
    <div>
      <h3>{ingredientNumber}</h3>
      <p>
        <label>Name</label>
        <input
          type="text"
          value={recipe.ingredients[ingredientNumber].name}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: {
                ...recipe.ingredients,
                [ingredientNumber]: {
                  ...recipe.ingredients[ingredientNumber],
                  name: e.target.value,
                },
              },
            })
          }
        />
      </p>
      <p>
        <label>Qty #</label>
        <input
          type="number"
          value={recipe.ingredients[ingredientNumber].qty}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: {
                ...recipe.ingredients,
                [ingredientNumber]: {
                  ...recipe.ingredients[ingredientNumber],
                  qty: e.target.value,
                },
              },
            })
          }
        />
      </p>
      <p>
        <label>Unit</label>
        <select
          value={recipe.ingredients[ingredientNumber].unit}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: {
                ...recipe.ingredients,
                [ingredientNumber]: {
                  ...recipe.ingredients[ingredientNumber],
                  unit: e.target.value,
                },
              },
            })
          }
        >
          <optgroup label="DRY">
            <option value=""></option>
            <option value="g">grams</option>
            <option value="kg">kilograms</option>
          </optgroup>
          <optgroup label="LIQUID">
            <option value="mL">milliliter</option>
            <option value="L">liter</option>
          </optgroup>
        </select>
      </p>
      <p>
        <label>Bulk Qty #</label>
        <input
          type="number"
          value={recipe.ingredients[ingredientNumber].bulkQty}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: {
                ...recipe.ingredients,
                [ingredientNumber]: {
                  ...recipe.ingredients[ingredientNumber],
                  bulkQty: e.target.value,
                },
              },
            })
          }
        />
      </p>
      <p>
        <label htmlFor="bulkUnit-1">Unit</label>
        <select
          name="bulkUnit"
          id="bulkUnit-1"
          value={recipe.ingredients[ingredientNumber].bulkUnit}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: {
                ...recipe.ingredients,
                [ingredientNumber]: {
                  ...recipe.ingredients[ingredientNumber],
                  bulkUnit: e.target.value,
                },
              },
            })
          }
        >
          <optgroup label="DRY">
            <option value=""></option>
            <option value="g">grams</option>
            <option value="kg">kilograms</option>
          </optgroup>
          <optgroup label="LIQUID">
            <option value="mL">milliliter</option>
            <option value="L">liter</option>
          </optgroup>
        </select>
      </p>
      <p>
        <label htmlFor="bulkCost-1">Bulk Cost $</label>
        <input
          name="bulkCost-1"
          type="number"
          id="bulkCost-1"
          value={recipe.ingredients[ingredientNumber].bulkCost}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: {
                ...recipe.ingredients,
                [ingredientNumber]: {
                  ...recipe.ingredients[ingredientNumber],
                  bulkCost: e.target.value,
                },
              },
            })
          }
        />
      </p>
    </div>
  );
}

export default IngredientForm;
