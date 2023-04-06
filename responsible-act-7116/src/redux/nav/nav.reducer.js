import * as types from './nav.actionTypes'

const initStata={
    navdata:[],
    loading:false,
    error:false
}

export function reducer (state = initStata, action){
    const {type, payload} = action;
    switch (type) {
        case types.NAV_LOADING:
        return {...state, loading:true, error:false}

        case types.NAV_GET_DATA:
            return {...state, error:false, navdata:payload, loading:false}

        case types.NAV_POST_DATA:
            return {...state, error:false, navdata:[...state.navdata, payload], loading:false}

        case types.NAV_POST_DATA:
            let newdata = state.navdata.filter((el)=>{
                return (+el.id)!=(+payload);
            })
            return {...state, error:false, navdata:[...newdata], loading:false}

        case types.NAV_ERROR:
            return {...state, error:true}
    
        default:
            return state;
    }
}