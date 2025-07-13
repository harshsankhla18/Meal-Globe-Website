import axios from 'axios';
import { useEffect, useState } from "react";
import "./NAv.css";
import SearchableDropdown from "./Searchable";
 function Nav ({onSelect})  {


  const [countries,setCountries]=useState([]);
   useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((res)=>{
      
      setCountries(res.data.meals.map((d)=>{
     return d;
 }))
    })
    
    .catch(
      (err)=>{
        
      }
    );
  },[]);

  return (
  <>
  
  <SearchableDropdown className={`search`} options={countries} onSelect={onSelect}/>
  </>
  )
}
export default Nav;
