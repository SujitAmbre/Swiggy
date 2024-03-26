import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { collectionFilterData, collectionHotelData } from "../redux/collectionsSlice";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import CollectionFilterPopup from "./CollectionFilterPopup";
import CollectionRestaurant from "./CollectionsRestaurant";

const Collections = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState([]);
    const [filterrestaurant, setFilterRestaurant] = useState([]);
    const sortConfigs = useSelector((store)=> store?.collectionFilterStore?.collectionFilterDataList?.card?.card?.sortConfigs);
    const vegNonVeg = useSelector((store)=> store?.collectionFilterStore?.collectionFilterDataList?.card?.card?.facetList);
    const checkData = useSelector((store)=> store.collectionFilterStore);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
  
    const [childData, setChildData] = useState({
        sortValue: '',
        vegNonVegValue: '',
        deliveryTimeValue: '',
        costForTwoValue: '',
    });
    const handleSortValueChange = (value) => {
        setChildData({ ...childData, sortValue: value });
    };

    const handlevegNonVegValueChange = (value) => {
        setChildData({ ...childData, vegNonVegValue: value });
    };

    const handledeliveryTimeValueChange = (value) => {
        setChildData({ ...childData, deliveryTimeValue: value });
    };
    const handlecostForTwoValueChange = (value) => {
        setChildData({ ...childData, costForTwoValue: value });
    };

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const queryParams = parts[parts.length - 1];

    // Split the query parameters by '&' to get individual key-value pairs
    const paramsArray = queryParams.split('&');

    // Initialize variables to store the values of collection_id and search_context
    let collectionId = '';
    let searchContext = '';
    let tags ='';

    // Loop through the key-value pairs and extract the values for collection_id and search_context
    paramsArray.forEach(param => {
        const [key, value] = param.split('=');
        if (key === 'collection_id') {
            collectionId = value;
        } else if (key === 'search_context') {
            searchContext = value;
        }
        else if (key === 'tags') {
            tags = value;
        }
    });
    useEffect(()=>{
        fetachCollectionData();
    },[])
    const fetachCollectionData = async ()=>{
        const resultJson = await fetch(`
        https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4863667&lng=73.95236109999999&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const finalResult = await resultJson.json();
        dispatch(collectionFilterData(finalResult.data.cards[1]));
        dispatch(collectionHotelData(finalResult.data.cards));
        setRestaurant(finalResult.data.cards);
        setFilterRestaurant(finalResult.data.cards);
    }
    if(checkData.collectionFilterDataList === "" || checkData.hotelDataList ==="") {
        return;
    }
    //console.log(restaurant);
    const handleFilterData = () => {
      // console.log(childData)
    }
    return(
      
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-2">
                 <CollectionFilterPopup onhandleSortValueChange={handleSortValueChange}
                onhandlevegNonVegValueChange={handlevegNonVegValueChange}
                onhandledeliveryTimeValueChange={handledeliveryTimeValueChange} onhandlecostForTwoValueChange={handlecostForTwoValueChange} sortConfigs={sortConfigs} vegNonVeg={vegNonVeg} handelCick={handleFilterData} /> 
                </div>
                <div className="col-lg-4">
        test
                </div>
            </div>
            <div className="row">
                    <div className="col-lg-12">
                    <h2 className='sc-aXZVg bwoZPF title '>Restaurants to explore</h2>
                    </div>
            </div>
            <div className="row">
                <CollectionRestaurant hotelList ={restaurant} filterhotelData={filterrestaurant} />
            </div>
        </div>
        </>
    )
}
export default Collections;