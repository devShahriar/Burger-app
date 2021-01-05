import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
//import DonarSignup from './DonarSignup'
//import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';
import { colors } from '@material-ui/core';
import axios from 'axios';
export default class MyVerticallyCenteredModal extends React.Component {
  constructor(props){
     super(props)
     this.state ={
       name:"",
       email:""
     }
  }
  onChange = (ev) => {

    this.setState({
      [ev.target.name]: ev.target.value
    })
  }
  checkOut=()=>{
    const { name , email } = this.state;
    const total = this.props.or.total;

    axios.post('http://localhost:9000/placeOrder'  , { name , email , total}).then(e=>alert("Your order is placed :) happy shopping"))
  }
   render() {
  
    return ( 
     
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Check out
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" name='name' onChange={this.onChange}/>
      <br></br>
      <TextField id="standard-basic" label="Email" name='email' onChange={this.onChange}/> 

    </form>
        </Modal.Body>
        <Modal.Footer>
    <text style={{ left:0 ,colors:'red'}}> Total price: ${this.props.or.total}</text>
        <Button variant="outline-danger" onClick={this.checkOut}>Check out</Button>{' '}
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  }
    
