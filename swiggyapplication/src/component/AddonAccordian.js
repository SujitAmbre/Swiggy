import { useDispatch } from "react-redux"
import { cartDataReducer } from "../redux/cartSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
const AddonAccordian = ({ addonData }) => {
    const [show, setShow] = useState(false);
    const [addonDetail, setAddonDetail] = useState([]);
    const [isvalid, setIsValid] = useState(false);
    const dispatch = useDispatch();

    const handelAddCart = (i, isvalid) => {
        debugger
        dispatch(cartDataReducer(i))

        if (isvalid) {
            setAddonDetail(i)
        } else {
            setAddonDetail("");
        }
        if (addonDetail.length > 0) {
            setShow(true);
        } else {
            setShow(false);
        }

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChangeradio = (e)=>{
        console.log(e.target.value)
    }
    return (
        <>

            <div class="accordion accordion-flush" id="accordionExample">
                {
                    addonData.map((item) => {
                        return (
                            <>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item?.card?.card?.title?.toLowerCase()?.replace(/[^a-zA-Z0-9]/g, "-")}`} aria-expanded="true" aria-controls="collapseOne">
                                            {item?.card?.card?.title}
                                        </button>
                                    </h2>
                                    <div id={item?.card?.card?.title?.toLowerCase()?.replace(/[^a-zA-Z0-9]/g, "-")} class="accordion-collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        {
                                            item?.card?.card?.itemCards?.map((i) => {

                                                return (
                                                    <>
                                                        <div className="row addonROw">
                                                            <div className="col-lg-8">
                                                                <h4>{i.card.info.name}</h4>
                                                                <p>₹{i.card.info.price / 100}</p>
                                                                <p>{i.card.info.description}</p>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="restaurantImg" style={{ backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${i.card.info.imageId})` }}>
                                                                    {

                                                                        Object.keys(i.card.info.variantsV2).length === 0 ?
                                                                            <button className="addToCartAddon  btn btn-primary" onClick={() => {
                                                                                setIsValid(true);
                                                                                handelAddCart(i, false);
                                                                            }}>Add</button>
                                                                            : <button className="addToCartAddon  btn btn-primary" onClick={() => {
                                                                                setIsValid(false);
                                                                                handelAddCart(i.card.info.variantsV2.variantGroups, true);
                                                                            }} >Add</button>
                                                                    }

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        addonDetail === "" ?
                            null
                            : addonDetail.map((i) => {
                                return (
                                    <>
                                        <h1 className="addonHeading">
                                            {i.name}
                                        </h1>
                                        {
                                            i.variations.map((v)=> {
                                                return(
                                                    <div className="addonROw">
                                                    <div>
                                                        {v.name}
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" value={v.name} onChange={(e)=>handleChangeradio(e)} type="radio" name={i.name.replace(/\s+|\//g, '').toLowerCase()} id="flexRadioDefault2" />
                                                            <label class="form-check-label" for="flexRadioDefault2">
                                                               
                                                            </label>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                      
                                    </>
                                )
                            })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default AddonAccordian;