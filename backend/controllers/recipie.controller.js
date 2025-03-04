import dontenv from "dotenv"
import { recipieController } from "../models/recipie.model.js"

dontenv.config()

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

const addRecipie =async (req, res)=>{
    const {title, ingredients, instructions, time}= req.body
    if(!title || !ingredients || !instructions){
        res.send({
            message: "required feild can't be empty"
        })
    }
    const newRecipie = await recipieController.create({
        title,ingredients,instructions,time
    })
    return res.send(newRecipie)

}

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
    deleteRecipie
}