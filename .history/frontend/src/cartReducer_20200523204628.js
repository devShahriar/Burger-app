const initState = {
    products:[],
    cartItem:[],
    total:0
}

const cartReducer = ( state= initState , action) =>{
    if(action.type === 'add-post'){
        console.log(action.payload)
        return {
            ...state,
            products:action.payload
        }
    }
    if(action.type === 'add-to-cart'){
        console.log(action.id)
        const product = state.products.find(item=>item.product_id===action.id)
        const isProductInCart = state.cartItem.find(cartI => cartI.product_id=== action.id)
        const oldProdId = state.cartItem.find(cartI => cartI.product_id=== action.id?cartI.product_id:null)
        console.log(product)
        
        if(isProductInCart){
            product.product_quantity++
               return {
                   ...state,
                   total:state.total+ parseInt(product.product_price)
               } 
        }else{
            product.product_quantity = 1
            let newTotal = state.total + parseInt(product.product_price);
            return {
                ...state,
                cartItem:[...state.cartItem, product],
                total:newTotal
            }
        }
       
      
           
        

    }
    if(action.type === 'remove-item'){
        console.log('a' +action.id)
        let itemToRemove = state.cartItem.find(item=> action.id === item.product_id)
        
        const isProductInCart = state.cartItem.find(cartI => cartI.product_id=== action.id)
        
        if(isProductInCart && itemToRemove.product_quantity>1){
            itemToRemove.product_quantity--;
            let newTotal = state.total - parseInt(itemToRemove.product_price )
            return {
                ...state,
                total : newTotal
            }
        }
        else{
            let newItems = state.cartItem.filter(item=> action.id !== item.product_id)
            let newT = state.total - parseInt(itemToRemove.product_price )
               return {
            ...state,
           cartItem:newItems,
            total:newT

        } 
        
        }
            
    }
}

export default cartReducer