import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import Shop from './shop';
import SplitPane from 'react-split-pane'
import Cart from './cart';
import { Card , Navbar} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import Login from './Login'
export default () =>{
const [products,setProducts] = useState([]);
const  [showLogin , setShowLogin] = useState(false)
const show = useSelector((state)=>(state ? state.showLogin : showLogin) )
const s = useSelector(state=>console.log(state))
const dispatch = useDispatch();
    const fetchProducts=async ()=>{
       const res =  await axios.get('http://localhost:9000/products')
       setProducts(res.data);
       dispatch({type : 'add-post' , payload : products})
    }
  
    useEffect(() => {
        fetchProducts();
      }, [products.length,localStorage.getItem("authTrue")]);
return (
      
  <div  style={{ backgroundColor:'#212121' , backgroundSize:'cover' , minHeight:'1000px'}}>
      <div classNam='n'>
      <Navbar style={{backgroundColor: '#ff732b'}} expand='lg'>
      <Navbar.Brand href="#home">Shop Items</Navbar.Brand>
      {localStorage.getItem("authTrue")==="true"?
       <button style={{ backgroundColor: "color|transparent" }} 
       onClick={
         (e)=>{
           
           localStorage.setItem("authTrue", "false")
           
         }
       }
       >Log out</button>
       :
      <button style={{ backgroundColor: "color|transparent" }} 
      onClick={
        (e)=>{
          e.preventDefault()
          setShowLogin(state=> !state)
          dispatch({type : 'showLogin' , payload : showLogin})
        }
      }
      >Login</button>
      
     }
      </Navbar>
    </div>
     
    <div style={{ maxWidth:'1300px'}}>
    { show ?
    <Login />:
    <Shop list={products}/>}  
    
    
    </div>

<div>
{
  localStorage.getItem("authTrue")==="true"?<Cart />:<div></div>
}  

</div>
  </div>  
     
     

    
     
 


    
  




  
  
 

 
)
};
