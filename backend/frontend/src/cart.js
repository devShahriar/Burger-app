import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./cart.css";
import { DropdownDivider } from "react-bootstrap/Dropdown";
import { Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import "./delete.png";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import MyVerticallyCenteredModal from './modal'

const Cart = (props) => {
  const [sh,setShow] = useState(false);
  const [order,setOrder] = useState({});
  const [secondary, setSecondary] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => (state ? state.cartItem : []));
  const totalPrice = useSelector((state) => (state ? state.total : 0));

  const render = () => {
    const renderItems = items.map((r, k) => {
      return (
        <div >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={`http://localhost:9000/images/${r.product_id}.png`}
              />
            </ListItemAvatar>
            <ListItemText
              style={{ color:'yellow'}}
              primary={`${r.product_name}`}
              secondary={secondary ? "Secondary text" : null}
            />
            <text style={{ color:'pink'}}>quantiy : {r.product_quantity}</text>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                 style={{color:'#eb3456'}}
                  onClick={() => {
                    dispatch({ type: "remove-item", id: r.product_id });
                  }}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      );
    });
    return renderItems;
  };
  const placeOrder = () => {
    setOrder({ total : totalPrice})
    setShow(true)
    
   // axios.post('http://localhost:9000/placeOrder'  , items)
  }
  return (
    <div className="cart">
      <Card.Title
        style={{ color: "blue", fontStyle: "italic", fontSize: "50px" }}
      >
        Your cart
      </Card.Title>
      <Divider />
      <List dense={dense}>{render()}</List>
      <MyVerticallyCenteredModal
      or={order}
      show={sh}
      onHide={()=>{
        setShow(false);
                  }} />
      <Button
        onClick={placeOrder}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,

          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        variant="outlined"
        color="secondary"
      >
        Place your order>
        <text style={{ color:'lightGreen'}}> Total price : ${totalPrice}</text>
        <AddShoppingCartIcon />
      </Button>
    </div>
  );
};

export default Cart;
