import * as types from './shipping.actionTypes'

let init = {
    firstname:'',
    lastname:"",
    country:"",
    street_address:"",
    address:"",
    city:"",
    postCode:"",
    mobile:"",
    mode:"",
}


export function reducer (state=init, action){
    const {type, payload} = action;
    switch (type) {
        case types.POST_ADDRESS:
            return {...state, ...payload}
    
        default:
            return state;
    }
}