import React, {useEffect, useState} from "react";
import "./styles.css";

const App = () =>{
  //need to protect keys
  const APP_ID = "12f429b7";
  const APP_KEY = "b45bbb581a0cf1b28596d25a5f678716";

  useEffect(()=> {
    console.log("Test")
  }, []);

  const getRecipes = async () =>{
    //await used because awaiting data from external API
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    console.log(data);
  }

return (
  <div className = "App">
    <form className = "search-form">
      <input className = "search-bar" type = "text"/>
      <button className = "search-button" type ="submit">Search Recipes</button>
    </form>

  </div>

);
};

export default App;
