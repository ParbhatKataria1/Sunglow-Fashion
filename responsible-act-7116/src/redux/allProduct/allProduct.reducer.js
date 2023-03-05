import * as types from './allProduct.actionTypes';


const init = {
    allProductData :[],
    loading:false,
    error:false
}


export function reducer (state=init, action){
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
        case types.ALLPRODUCT_LOADING:
            return {...state, loading:true, error:false}

            case types.GET_ALLPRODUCT_DATA:
            return {...state, loading:false, error:false, allProductData:payload}

            case types.POST_ALLPRODUCT_DATA:
            return {...state, loading:false, error:false, allProductData:[payload,...state.allProductData]}

            case types.UPDATE_ALLPRODUCT_DATA:
                let newdata1 = state.allProductData.map((el)=>{
                    return el.id===payload.id?payload:el;
                })
            return {...state, loading:true, error:false, allProductData:newdata1}
            
            case types.DELETE_ALLPRODUCT_DATA:
                let newdata2 = state.allProductData.fiter((el)=>{
                    return el.id!=payload;
                })
            return {...state, loading:true, error:false, allProductData:newdata2}
    
        default:
           return state;
    }
}