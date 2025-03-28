import React, { Fragment } from 'react';
import paneer from '../assets/paneer.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import RecipeItem from '../components/RecipeItem';
import hero from "../assets/hero.jpeg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <Fragment>
      <Navbar />
      
      <div>
        <img src={hero} alt="" style={{ width: "80%",height: "600px",  borderRadius: "20px", marginTop: "100px", marginLeft : "110px"}} />
        <div className='hero-text'>
        A recipe has no soul. <br /> You, as the cook, <br /> must bring soul to the recipe</div>
        </div>
      <div className='home container '> 
        
        <div className="row align-items-center">
          <div className="col-md-6 mb-4" style={{ marginTop: '10px' }}>
            <h1 className="display-4">Food Recipe</h1>
            <p className="lead">
              This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book. It has survived not only five centuries.
            </p>
            <button className="btn-home" onClick={()=>navigate("/addRecipe")}>Share Your Recipe</button> 
          </div>
          <div className="col-md-6 text-center">
            <img
              src={paneer}
              alt="Paneer Dish"
              className="img-fluid rounded shadow"
              style={{ width: '320px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div>
        <RecipeItem/>
      </div>
      <Footer /> 
    </Fragment>
  );
}

export default Home;


