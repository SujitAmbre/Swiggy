import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Header from "./Header";

const Meal = ()=> {
    const [searchMeal, setSearchMeal] =useState();
    const [storeMealData, setStoreMealData] = useState();
    const [categoryData, setCategroyData] = useState();
    const [categoryDatafilter, setCategroyDataFilter] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [area, setArea] = useState();
    const searchMealEvt =  async ()=>{
        try {
            const mealData =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
        
            const finalMealData = await mealData.json();
            setStoreMealData(finalMealData);
            setCategroyData(finalMealData.meals);
            setCategroyDataFilter(finalMealData.meals);
           
        } catch (error) {
            console.error('Error fetching the meal data:', error);
        }
       
    }
    console.log(searchMeal)
//   const selectCategoryEvt =(e)=>{
//     debugger
//     const categoryDatafilter1 = categoryDatafilter.filter((i)=>{
//         return i.strCategory === e.target.value;
//     })
//     setCategroyData(categoryDatafilter1);

//   }
useEffect(()=>{
    const categoryDatafilter1 = categoryDatafilter?.filter((i)=>{
                return i.strCategory === selectedCategory && i.strArea===area;
            })
            setCategroyData(categoryDatafilter1);
},[selectedCategory, area])
    return(
        <>
        <Header />
            <div className="form-group col-lg-12 mt-5">
                <input type="text" name="searchMeal" onChange={(e)=>setSearchMeal(e.target.value)} />
                <input type="submit" onClick={searchMealEvt} />
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <h3>Category</h3>
                {storeMealData?.meals ? 
                    storeMealData && storeMealData?.meals?.map((i)=>{
                        return(
                            <div className="col-lg-12" key={i.idMeal}>
                                  <input type="radio" onChange={(e)=>{setSelectedCategory(e.target.value)}} name="strCategory" value={i.strCategory} style={{width:'15px',height:'15px',verticalAlign: 'middle',border:'1px solid' }} />{i.strCategory}<br/>
                            </div>
                        )
                    }) 
                    : null 
                   
                }
                <>
                    <select onChange={(e)=>{setArea(e.target.value)}}>
                    {storeMealData?.meals ? 
                    storeMealData && storeMealData?.meals?.map((i)=>{
                        return(
                           <option key={i.idMeal} value={i.strArea}>{i.strArea}</option>
                        )
                    }) 
                    : null 
                   
                }
                    </select>
                </>
                </div>
               
                {categoryData ? 
                    categoryData && categoryData?.map((i)=>{
                        return(
                            <div className="col-lg-3" key={i.idMeal}>
                                  <img src={i.strMealThumb} style={{width:'100%'}} />
                                  <h1>{i.strMeal}</h1>
                                  <Link to={'/recipe/'+i.idMeal}>Recipe</Link> 
                            </div>
                        )
                    }) 
                    : 
                    <div className="col-lg-12">
                            <p>No Data Found</p>
                    </div>
                   
                }
                
            </div>
        </>
    )
}
export default Meal;