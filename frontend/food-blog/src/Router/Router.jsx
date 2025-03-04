import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import AddFoodRecipe from "../pages/AddFoodRecipe"




const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={Home} />
    <Route path="/addRecipe" Component={AddFoodRecipe} />
    
   </Routes>
   </BrowserRouter>
  )
}

export default Router


