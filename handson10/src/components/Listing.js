/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default function (props) {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Recipe Listing</h1>
        {props.data.map((recipe) => (
          <React.Fragment key={recipe._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{recipe.title}</h3>
                <h4>Ingredients</h4>
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
