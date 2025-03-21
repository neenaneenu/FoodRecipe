import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import AddFoodRecipe from "../pages/AddFoodRecipe"
import Signup from "../components/signup"




const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={Home} />
    <Route path="/addRecipe" Component={AddFoodRecipe} />
    <Route path="/Signup" Component={Signup} />

    
   </Routes>
   </BrowserRouter>
  )
}

export default Router


