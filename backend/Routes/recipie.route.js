import { Router } from "express";
import recipieController from "../controllers/recipie.controller.js";
import { upload } from "../multer.js"; // Import multer

const recipieRoute = Router();

recipieRoute.get("/", recipieController.getRecipies);
recipieRoute.get("/:id", recipieController.getRecipie);
recipieRoute.post("/", upload.single("image"), recipieController.addRecipie); // Accepts image upload
recipieRoute.put("/:id", upload.single("image"), recipieController.editRecipie); // Accepts image update
recipieRoute.delete("/:id", recipieController.deleteRecipie);

export default recipieRoute;





