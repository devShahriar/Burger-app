import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import Shop from './shop';
import SplitPane from 'react-split-pane'
import Cart from './cart';
import { Card , Navbar} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
export default () =>{
const [products,setProducts] = useState([]);
const s = useSelector(state=>console.log(state))
const dispatch = useDispatch();
    const fetchProducts=async ()=>{
       const res =  await axios.get('http://localhost:9000/products')
       setProducts(res.data);
       dispatch({type : 'add-post' , payload : products})
    }
  
    useEffect(() => {
        fetchProducts();
      }, [products.length]);
return (
      
  <div style={{ backgroundColor:'#212121'}}>
      <div classNam='n'>
      <Navbar style={{backgroundColor: '#ff732b'}} expand='lg'>
      <Navbar.Brand href="#home">Shop Items</Navbar.Brand>
      </Navbar>
      </div>
     
    <div style={{ maxWidth:'1500px'}}>

    <Shop list={products}/>
     </div>

<div >
<Cart />
</div>
  </div>  
     
     

    
     
 


    
  




  
  
 

 
)
};
