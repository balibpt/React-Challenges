import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "../src/components/Listing";
import AddNew from "../src/components/AddNew";

export default class RecipeBook extends React.Component {
  state = {
    active: "listing",
    data: [
      {
        _id: 1,
        title: "Chicken Rice",
        ingredients: ["Chicken Broth", "Chicken", "Rice"],
      },
      {
        _id: 2,
        title: "Duck Rice",
        ingredients: ["Duck", "Rice"],
      },
    ],
    newTitle: "",
    newIngredients: [],
  };

  renderContent() {
    if (this.state.active === "listing") {
      return (
        <React.Fragment>
          <Listing data={this.state.data} />
        </React.Fragment>
      );
    } else if (this.state.active === "add") {
      return (
        <React.Fragment>
          <AddNew
            updateFormField={this.updateFormField}
            addRecipe={this.addRecipe}
          />
        </React.Fragment>
      );
    }
  }

  changePage = (data) => {
    console.log("🚀 ~ file: RecipeBook.js:45 ~ RecipeBook ~ data:", data);
    // if (event.target.name === "Recipes") {
    //   this.setState({
    //     active: "listing",
    //   });
    // } else if (event.target.name === "Add") {
    //   this.setState({
    //     active: "add",
    //   });
    // }
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addRecipe = (event) => {
    const newId = this.state.data.slice(-1)._id + 1;
    const newRecipe = {
      _id: newId,
      title: this.state.newTitle,
      ingredients: this.state.newIngredients.split(","),
    };
    this.setState({
      data: [...this.state.data, newRecipe],
      newTitle: "",
      newIngredients: [],
      active: "listing",
    });
  };

  render() {
    return (
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <button
              class="nav-link active"
              name="Recipes"
              aria-current="page"
              onClick={(e) => {
                this.changePage();
                console.log("what is e", e);
              }}
            >
              Recipes
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              name="Add"
              onClick={this.changePage("test")}
            >
              Add New
            </button>
          </li>
        </ul>
        {this.renderContent()}
      </div>
    );
  }
}
