import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteMenu from './Components/InfiniteMenu/InfiniteMenu';
import Nav from './Navbar/Nav';

function App() {
  
  const [items,setItems]=useState([]);
    class menu{
    constructor(strMeal,strMealThumb){
      this.image=strMealThumb+"/large";
      this.title=strMeal;
      this.link=`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
      this.description= "";
    }
  }
  const[typea,setTypea]=useState("Indian");
  const onSelect=(m)=>{
setTypea(m);
  }
  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${typea}`)
    .then((res)=>{
      
      setItems(res.data.meals.map(({strMeal,strMealThumb,idMeal})=>{
     return new menu(strMeal,strMealThumb);
 }))
    })
    
    .catch(
      (err)=>{
        
      }
    );
  },[typea]);

  return (
    <>
      
      <div style={{ height: '100%', position: 'relative' }}>
      
       <InfiniteMenu items={items}/>
       <Nav onSelect={onSelect} />
    </div>
    </>
  );
}

export default App
