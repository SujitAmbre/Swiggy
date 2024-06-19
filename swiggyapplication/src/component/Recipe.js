import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

const Recipe = () => {
    const { id } = useParams();
    const [recipeInfo, setRecipeInfo] = useState();
    const fecthData = async () => {
        const getRecipeData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const getResult = await getRecipeData.json();
        setRecipeInfo(getResult);
    }
    useEffect(() => {
        fecthData();
    }, [])
    return (
        <>
            <Header />
            {
                recipeInfo && recipeInfo.meals.map((i) => {
                    return (
                        <div className="recipeParent">
                            <div className="recipeImageCol">
                                <div style={{backgroundImage:`url(${i.strMealThumb})`}} alt={i.strMeal} className="recipeThumb"> </div>
                            </div>
                            <div className="recipeInfo">
                                <h1>{i.strMeal}</h1>
                                <p>{i.strInstructions}</p>
                                <h4>Ingredients</h4>
                                <p>{i.strIngredient1}</p>
                                <p>{i.strIngredient2}</p>
                                <p>{i.strIngredient3}</p>
                                <p>{i.strIngredient4}</p>
                                <p>{i.strIngredient5}</p>
                                <p>{i.strIngredient6}</p>
                                <p>{i.strIngredient7}</p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Recipe;