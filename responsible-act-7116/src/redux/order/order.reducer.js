import * as types from './order.actionTypes';


const init = {
    orderData :[],
    loading:false,
    error:false,
}


export function reducer (state=init, action){
    const { type, payload } = action;
    switch (type) {
        case types.ORDER_LOADING:
            return {...state, loading:true, error:false}

            case types.GET_ORDER_DATA:
            return {...state, loading:false, error:false, orderData:payload}

            case types.POST_ORDER_DATA:
            return {...state, loading:false, error:false, orderData:[...state.orderData, payload]}

            case types.UPDATE_ORDER_DATA:
                let newdata1 = state.orderData.map((el)=>{
                    return el.id===payload.id?payload:el;
                })
            return {...state, loading:true, error:false, orderData:newdata1}
            
            case types.DELETE_ORDER_DATA:
                
                // console.log(state.cartData, 'in reducer');
                let newdata2 = state.orderData.filter((el)=>{
                    return el.id!=payload;
                })
            return {...state, loading:true, error:false, orderData:newdata2}
    
        default:
           return state;
    }
}