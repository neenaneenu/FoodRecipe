import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddFoodRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: "",
    image: "", 
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    let value =
      e.target.name === "ingredients"
        ? e.target.value.split(",") 
        : e.target.value;
    
    setRecipeData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/recipie", recipeData, {
        
      });

      toast.success("Recipe added!");
      navigate("/");
    } catch (error) {
      console.error("Error adding recipe:", error);
      toast.error("Failed to add recipe.");
    }
  };

  return (
    <Fragment>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 className="addRecipe">Share your Recipe</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" className="input" name="title" required onChange={handleOnChange} />
          </div>

          <div className="form-control">
            <label>Time (mins)</label>
            <input type="number" className="input" name="time" required onChange={handleOnChange} />
          </div>

          <div className="form-control">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea className="input-textarea" name="ingredients" rows="5" required onChange={handleOnChange}></textarea>
          </div>

          <div className="form-control">
            <label htmlFor="instructions">Instructions</label>
            <textarea className="input-textarea" name="instructions" rows="5" required onChange={handleOnChange}></textarea>
          </div>

          <div className="form-control">
            <label>Images</label>
            <input type="file" className="input"name="file" />
          </div>

          <button type="submit" className="submit-btn">Add Recipe</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddFoodRecipe;


