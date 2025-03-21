import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const AddFoodRecipe = () => {
  const [recipeData, setRecipeDta]= useState({})
  const navigate = useNavigate()
  const handleOnChange = (e)=>{
    let val =(e.target.name === "ingredients") ? e.target.value.split(",") : e.target.value
    setRecipeDta(Pre=>({...Pre, [e.target.name]:val}))

  }

  const handleOnSubmit = async(e)=>{
    e.preventDefault()
    console.log(recipeData)
    await axios.post("http://localhost:3000/recipie" , recipeData)
    .then(()=> navigate("/"))
    toast.success("Recipe added!");


  }
  return (
    <Fragment>
        <div style={{textAlign: "center", marginTop : "20px"}}>
            <h1 className='addRecipe'>Share your Recipe</h1>
        </div>
    <div className='form-container' onSubmit={handleOnSubmit}>
        
      <form>
        <div className='form-control' >
          <label htmlFor="title">Title</label>
          <input type="text" className='input' name='title' id="title" required onChange={handleOnChange} />
        </div>
        
        <div className='form-control'>
          <label htmlFor="time">Time (mins)</label>
          <input type="number" className='input' name='time' id="time" required onChange={handleOnChange}/>
        </div>
          
        <div className='form-control'>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea className='input-textarea' name="ingredients" id="ingredients" rows="5" required onChange={handleOnChange}></textarea>
        </div>

        <div className='form-control'>
          <label htmlFor="instructions">Instructions</label>
          <textarea className='input-textarea' name="instructions" id="instructions" rows="5" required onChange={handleOnChange}></textarea>
        </div>
        <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='input' name="file" ></input>
                    </div>

        <button type="submit" className='submit-btn'>Add Recipe</button>
      </form>
    </div>
    </Fragment>
  )
}

export default AddFoodRecipe

