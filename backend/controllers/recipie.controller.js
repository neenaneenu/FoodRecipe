import dotenv from "dotenv"
import { recipieController } from "../models/recipie.model.js"
import { getFilePath } from "../multer.js"; 

dotenv.config()



const getRecipies = async(req, res)=>{
  try {
    const recipes = await recipieController.find()
    return res.send(recipes)
  } catch (error) {
    return res.status(500).send({ message: "failed to fetch recipie"
    })
    
  }
}

const getRecipie = async (req, res)=>{
    try {
        const recipe = await recipieController.findById(req.params.id)
    if(!recipe){
        return res.status(404).send({message:"recipies not found"})
    }
    res.send(recipe)
    } catch (error) {
        return res.status(500).send({message: "failed to fetch recipie"})
        
    }

}

const addRecipie = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).send({ message: "Required fields can't be empty" });
  }

  try {
    // Store image path if file exists
    const imagePath = req.file ? getFilePath(req.file.filename) : null;

    const newRecipie = await recipieController.create({
      title,
      ingredients,
      instructions,
      time,
      image: imagePath, // Save the image path
    });

    return res.status(201).send(newRecipie);
  } catch (error) {
    return res.status(500).send({ message: "Failed to add recipe" });
  }
};

const editRecipie =async (req, res)=>{
    const { title,ingredients,instructions,time} = req.body
    const recipe = await recipieController.findById(req.params.id)
    try {
        if(recipe){
            await recipieController.findByIdAndUpdate(req.params.id, req.body , {new: true})
            return res.send(title,ingredients,instructions,time)
        }
    } catch (error) {
        return res.status(404).send({
            message: "error"
        })
    }

}

const deleteRecipie = async (req, res)=>{
    try {
        const recipe = await recipieController.findById(req.params.id)
        if (!recipe) {
          return res.status(404).send({ message: "Recipe not found" })
        }
        await recipieController.findByIdAndDelete(req.params.id)
        return res.send({ message: "Recipe deleted successfully" })
      } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Failed to delete recipe" })
      }
    }
    



export default {
    getRecipies,
    getRecipie,
    addRecipie,
    editRecipie,
    deleteRecipie,
    
}