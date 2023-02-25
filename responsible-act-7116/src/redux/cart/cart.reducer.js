import * as types from './cart.actionTypes';


const init = {
    cartData :[],
    loading:false,
    error:false
}


export function reducer (state=init, action){
    const {type, payload} = action;
    switch (type) {
        case types.CART_LOADING:
            return {...state, loading:true, error:false}

            case types.GET_CART_DATA:
            return {...state, loading:false, error:false, cartData:payload}

            case types.POST_CART_DATA:
            return {...state, loading:false, error:false, cartData:[...state.cartData, payload]}

            case types.UPDATE_CART_DATA:
                let newdata1 = state.cartData.map((el)=>{
                    return el.id===payload.id?payload:el;
                })
            return {...state, loading:true, error:false, cartData:newdata1}
            
                             case types.DELETE_CART_DATA:
                let newdata2 = state.cartData.fiter((el)=>{
                    return el.id!=payload;
                })
            return {...state, loading:true, error:false, cartData:newdata2}
    
        default:
            state;
    }
}