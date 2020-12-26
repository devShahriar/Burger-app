import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import './shop.css'
import { useSelector,useDispatch, useStore } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import {IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckIcon from '@material-ui/icons/Check';
import FavoriteIcon from '@material-ui/icons/Favorite';
 export default ( props )=>{
  const items = useSelector(state=>state? state.products:[]);
  const itemIncart = useSelector(state=>state? state.cartItem:[])
  const dispatch = useDispatch();
  const [selected , setSeltected] = useState([])
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  }));
  const classes = useStyles();
  const s = {
    
    
  }
 return (
  items.map(res=>{
    return (  
       <div className='cards' key={res.product_id}>
       <Card style={{width: '18rem' , backgroundColor:'black' , borderRadius:'25px'}} >
         <div className='fav' >
           <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       <Card.Img style={{ maxHeight:'180px'}} variant="top" src={`http://localhost:9000/images/${res.product_id}.png`} />
       
         </div>
       
       
       <Card.Body >
         <Card.Title style={{ color:'lightBlue'}}> {res.product_name}</Card.Title>
         <Card.Text style={{ color:'white'}}>
           {res.product_description}
         </Card.Text>
            <Fab aria-label='Add' className={classes.fab} style={{ backgroundColor:'#272725',color:'red'}}
            onClick={
               ()=>{
                setSeltected((p)=> ([...p ,res.product_id]    ))   
               
                dispatch({type:'add-to-cart' ,id:res.product_id})
                }
            }> 
              {  itemIncart.find(i=>i.product_id===res.product_id)?<CheckIcon/>:<AddShoppingCartIcon/>
                
              }
          
          </Fab> 
       </Card.Body>
     </Card>
       </div>
     
     );    
   })
 )
    
  
  }


