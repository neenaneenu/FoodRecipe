import { Router } from "express"
import recipieController, {} from "../controllers/recipie.controller.js"

const recipieRoute = Router()

recipieRoute.get("/", recipieController.getRecipies)
recipieRoute.get("/:id", recipieController.getRecipie)
recipieRoute.post("/", recipieController.addRecipie)
recipieRoute.put("/:id", recipieController.editRecipie)
recipieRoute.delete("/:id", recipieController.deleteRecipie)

export default recipieRoute

