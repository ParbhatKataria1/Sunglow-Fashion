import * as types from './cart.actionTypes'
import { fetchCartData, fetchDeleteCartData, fetchPostCartData, fetchUpdateCartData } from './cart.api';


export  const getCartData =  ()=>async(dispatch)=>{
    dispatch({type:types.CART_LOADING});
    try {
        let data = await fetchCartData();
        console.log(data);
        if(data){
            dispatch({type:types.GET_CART_DATA, payload:data})
        }
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
}


export  const postCartData =  (obj)=>async(dispatch)=>{
    dispatch({ type: types.CART_LOADING });
 console.log(obj);
    try {
        let data = await fetchPostCartData(obj);
       
        if(data){
            
            dispatch({type:types.POST_CART_DATA, payload:data})
        }
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
}

export  const updateCartData =  (id , obj)=>async(dispatch)=>{
    dispatch({type:types.CART_LOADING});
    try {
        let data = await fetchUpdateCartData(id, obj);
        if(data){
            
            dispatch({type:types.UPDATE_CART_DATA, payload:data})
        }
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
}

export  const deleteCartData =  (id)=>async(dispatch)=>{
    dispatch({type:types.DELETE_CART_DATA});
    try {
        let data = await fetchDeleteCartData(id);
        if(data){
            dispatch({type:types.DELETE_CART_DATA, payload:id})
        }
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
}



