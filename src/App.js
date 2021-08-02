import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const  App = () => {

  const APP_ID= '5eca5549';
  const APP_KEY = 'a4e557cfe87d9acf22e6a1bf1dfafd7c';
  const [recipes, setRecipes] = useState([])
  useEffect(()=>{
  getRecipes();
  }, [])
  const getRecipes = async ()=>{
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = response.json();
  setRecipes(data);

  }
  return (
    <div className="App">
     <form className= "search-form" >

       <input  className= "search-bar" type="text" />
       <button className=" search-button">Search</button>
     </form> 
     {recipes.map(recipe => (
       <Recipe/>
     ))}
    </div>
  );
}

export default App;
