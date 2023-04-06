


import * as types from './order.actionTypes'
import { fetchOrderData, fetchDeleteCartData, fetchPostOrderData, fetchUpdateOrderData, fetchDeleteOrderData } from './order.api';


export  const getOrderData =  ()=>async(dispatch)=>{
    dispatch({type:types.ORDER_LOADING});
    try {
        let data = await fetchOrderData();
        // console.log(data);
        if(data){
            dispatch({type:types.GET_ORDER_DATA, payload:data})
        }
    } catch (error) {
        dispatch({type:types.ORDER_ERROR})
    }
}


export  const postOrderData =  (obj)=>async(dispatch)=>{
    dispatch({type:types.ORDER_LOADING});
    try {
        let data = await fetchPostOrderData(obj);
       
        if(data){
            
            dispatch({type:types.POST_ORDER_DATA, payload:data})
        }
    } catch (error) {
        dispatch({type:types.ORDER_ERROR})
    }
}

export  const updateOrderData =  (id , obj)=>async(dispatch)=>{
    dispatch({type:types.ORDER_LOADING});
    try {
        let data = await fetchUpdateOrderData(id, obj);
        if(data){
            
            dispatch({type:types.UPDATE_ORDER_DATA, payload:data})
        }
    } catch (error) {
        dispatch({type:types.ORDER_ERROR})
    }
}

export const deleteOrderData =  (id)=>async(dispatch)=>{
    dispatch({type:types.DELETE_ORDER_DATA});
    try {
        let data = await fetchDeleteOrderData(id);
        if(data){
            dispatch({type:types.DELETE_ORDER_DATA, payload:id})
        }
    } catch (error) {
        dispatch({type:types.ORDER_ERROR})
    }
}



