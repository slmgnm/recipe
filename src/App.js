import React, { useEffect, useState } from 'react';
import './App.css';

import Recipe from './Recipe';

const  App = () => {

  const APP_ID= '5eca5549';
  const APP_KEY = 'a4e557cfe87d9acf22e6a1bf1dfafd7c';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(()=>{
  getRecipes();
  }, [query])
  const getRecipes = async ()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await  response.json();

  setRecipes(data.hits);



  };
  const searchUpdate = e =>{
    setSearch(e.target.value);
     };
     const getSearch = e =>{
       e.preventDefault();
    setQuery(search);
    setSearch('');
     };
  return (
    <div className="App">
     <form onSubmit={getSearch} className= "search-form" >

       <input  className= "search-bar" type="text" value = {search} onChange= {searchUpdate} />
       <button className=" search-button">Search</button>
     </form> 
     <div className="recepies">
     {recipes.map( recipe => (
      
       <Recipe
        title={recipe.recipe.label} 
       calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} />
     ))}
    </div>
    </div>
  );
}

export default App;
