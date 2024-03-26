import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useDispatch, useSelector } from "react-redux";
const CollectionFilterPopup = ({sortConfigs, vegNonVeg, handelCick, onhandleSortValueChange, onhandlevegNonVegValueChange, onhandledeliveryTimeValueChange, onhandlecostForTwoValueChange}) =>{
    const modalClickBtn = useRef(null);
    const [show, setShow] = useState(false);
    // const sortConfigs = useSelector((store)=> store?.collectionFilterStore?.collectionFilterDataList?.card?.card?.sortConfigs);
    // const vegNonVeg = useSelector((store)=> store?.collectionFilterStore?.collectionFilterDataList?.card?.card?.facetList);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if(vegNonVeg===null) {
    return;
  }
  if(sortConfigs === null) {
    return;
  }
  const handleSortChange = (event) => {
    onhandleSortValueChange(event.target.value);
};

const handlevegNonVEGChange = (event) => {
  onhandlevegNonVegValueChange(event.target.value);
};

const handleDeliveryChange = (event) => {
  onhandledeliveryTimeValueChange(event.target.value);
};
const handleCostForTwoChange = (event) => {
  onhandlecostForTwoValueChange(event.target.value);
};
    return(
        <>
<Button variant="primary" onClick={handleShow}>
       Filter
      </Button>

      <Modal show={show} onHide={handleClose} className="collectionPopup">
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="SortTab">Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vegNonVegTab">Veg/Non-veg</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="deliveryTimeTab">Delivery Time</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="costForTwoTab">Cost for two</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="SortTab">
                {
                  sortConfigs?.map((item)=>{
                    return(
                      <>
                      <div className="form-check">
                        <input className="form-check-input" value={item.title} onChange={handleSortChange} type="radio" key={item.key} name="Sort" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          {item.title}
                        </label>
                      </div>
                      </>
                    )
                  })
                }
                     
            </Tab.Pane>
            <Tab.Pane eventKey="vegNonVegTab">
            {
                 vegNonVeg[0]?.facetInfo.length > 0 && vegNonVeg[0]?.facetInfo?.map((item)=>{
                    return(
                      <>
                      <div className="form-check">
                        <input className="form-check-input" value={item.label} onChange={handlevegNonVEGChange}  type="radio" key={item.key} name="vegNonveg" id={item.isVegfacetquery2} />
                        <label className="form-check-label" htmlFor={item.isVegfacetquery2} >
                          {item.label}
                        </label>
                      </div>
                      </>
                    )
                  })
                }
            </Tab.Pane>
            <Tab.Pane eventKey="deliveryTimeTab">
            {
                  vegNonVeg[1]?.facetInfo?.map((item)=>{
                    return(
                      <>
                      <div className="form-check">
                        <input className="form-check-input" value={item.label} onChange={handleDeliveryChange} type="radio" key={item.key} name="vegNonveg" id={item.isVegfacetquery2} />
                        <label className="form-check-label" htmlFor={item.isVegfacetquery2} >
                          {item.label}
                        </label>
                      </div>
                      </>
                    )
                  })
                }
            </Tab.Pane>
            <Tab.Pane eventKey="costForTwoTab">
            {
                  vegNonVeg[2]?.facetInfo?.map((item)=>{
                    return(
                      <>
                      <div className="form-check">
                        <input className="form-check-input" value={item.label} onChange={handleCostForTwoChange} type="radio" key={item.key} name="vegNonveg" id={item.isVegfacetquery2} />
                        <label className="form-check-label" htmlFor={item.isVegfacetquery2} >
                          {item.label}
                        </label>
                      </div>
                      </>
                    )
                  })
                }
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelCick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        
        </>
    )
}
export default CollectionFilterPopup;