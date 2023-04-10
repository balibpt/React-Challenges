import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <React.Fragment>
      <h1>Add New Recipe</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-control mb-3"
          name="newTitle"
          onChange={props.updateFormField}
        />
        <label>Ingredients</label>
        <input
          type="text"
          className="form-control mb-3"
          name="newIngredients"
          onChange={props.updateFormField}
        />
        <button className="btn btn-primary" onClick={props.addRecipe}>
          Add
        </button>
      </div>
    </React.Fragment>
  );
}
