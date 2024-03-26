import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { storeSearchFoodResult } from "../redux/searchSlice";
import { SEARCH_FOOD_IMG } from "./constant";
const Search = () => {
    const dispatch = useDispatch();
 
    const onChnageSearchFood = async(e)=>{
       // console.log(e.target.value)
        const searchResultData = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.4863667&lng=73.95236109999999&str=${e.target.value}&trackingId=null`);
        const finalSearchData = await searchResultData.json();
       // console.log(finalSearchData)
        dispatch(storeSearchFoodResult(finalSearchData));
    }
    const resultLIst  =  useSelector((store) => store?.foodSearch?.searchFoodResult);
    
    // if(!resultLIst) return;
    return (
        <>
           <Header />
            <div className="search-box">
                <input type="text" placeholder="Search..." onChange={(e)=> onChnageSearchFood(e)} />
                <i class="bi bi-search"></i>
            </div>
            <div className="resultFood">
        {
            resultLIst?.data?.suggestions?.map((item)=>{
              //  console.log(item)
                return(
                    <>
                        <div className="searchResultMainRow">
                            <div className="searchFirstColImg">
                           <img src={`${SEARCH_FOOD_IMG}/${item.cloudinaryId}`} alt="test" />
                            </div>
                            <div className="searchSecondCol">
                              <p>{item?.text}</p>
                              <p>{item.type}</p>
                            </div>
                        </div>
                    </>
                )

                
            })
        }
        </div>
            
        </>
    )
}
export default Search;