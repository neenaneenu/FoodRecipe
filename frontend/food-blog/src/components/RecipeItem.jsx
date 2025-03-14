import React, { Fragment, useEffect, useState } from 'react';
import paneer from "../assets/paneer.jpeg";
import { IoMdStopwatch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const RecipeItem = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3000/recipie'); // Update API endpoint
        if (!response.ok) throw new Error('Failed to fetch recipes');

        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem', color: 'red' }}>
        Error: {error}
      </div>
    );
  }

  if (recipes.length === 0) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>No recipes found.</div>;
  }

  return (
    <Fragment>
      {/* Explore Now Title */}
      <div className="text-center" style={{ marginBottom: '1.5rem' }}>
        <h1>Explore Now!!!</h1>
      </div>

      <div className="recipe-container">
        {recipes.map((recipe , index) => (
          <div className="recipe-card" key={recipe.id ||  index} >
            {/* Recipe Image */}
            <img
              src={recipe.image || paneer}
              alt={`${recipe.title} image`}
              className="recipe-image"
            />

            {/* Recipe Content */}
            <div className="recipe-content">
              <h2>{recipe.title}</h2>

              <p>
                <strong>Ingredients:</strong>{' '}
                {Array.isArray(recipe.ingredients)
                  ? recipe.ingredients.join(', ')
                  : recipe.ingredients}
              </p>

              <p>
                <strong>Instructions:</strong> {recipe.instructions}
              </p>

              {recipe.time && <p><strong>Time:</strong> {recipe.time}</p>}
            </div>
            <div className='icons'>
              <div><IoMdStopwatch /></div>
              <CiHeart />

            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default RecipeItem;








