import React, { Fragment } from 'react'

const AddFoodRecipe = () => {
  return (
    <Fragment>
        <div style={{textAlign: "center", marginTop : "20px"}}>
            <h1 className='addRecipe'>Share your Recipe</h1>
        </div>
    <div className='form-container'>
        
      <form>
        <div className='form-control'>
          <label htmlFor="title">Title</label>
          <input type="text" className='input' name='title' id="title" required />
        </div>
        
        <div className='form-control'>
          <label htmlFor="time">Time (mins)</label>
          <input type="number" className='input' name='time' id="time" required />
        </div>
          
        <div className='form-control'>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea className='input-textarea' name="ingredients" id="ingredients" rows="5" required></textarea>
        </div>

        <div className='form-control'>
          <label htmlFor="instructions">Instructions</label>
          <textarea className='input-textarea' name="instructions" id="instructions" rows="5" required></textarea>
        </div>

        <button type="submit" className='submit-btn'>Add Recipe</button>
      </form>
    </div>
    </Fragment>
  )
}

export default AddFoodRecipe

