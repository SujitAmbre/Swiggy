const RestaurantAccoridanItem = ({itemlist})=> {

    return(
    <>
        {
           itemlist.map((item)=>{
            console.log(item)
            return(
                <>
                    <h5>{item.card.info.name}</h5>
                    <p>{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</p>
                    {item.card.info.ratings.aggregatedRating.rating ? <p>Ratings: {item.card.info.ratings.aggregatedRating.rating}</p> : null }
                    <button className="btn btn-primary">Add</button>
                </>
            )
           })
        }
    </>
)
}
export default RestaurantAccoridanItem;