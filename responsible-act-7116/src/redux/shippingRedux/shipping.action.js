import * as types from './shipping.actionTypes'


export const  postAddress = (obj)=>(dispatch)=>{
    dispatch({type:types.POST_ADDRESS, payload:obj})
}

