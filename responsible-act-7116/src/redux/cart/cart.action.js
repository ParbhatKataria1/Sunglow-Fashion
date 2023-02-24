import * as types from './cart.actionTypes'


export  const getCartData = async ()=>(dispatch)=>{
    dispatch({type:types.CART_LOADING});
    try {
        let data = await fetchCartData();
    } catch (error) {
        
    }
}

const cartUrl  = 'https://apiserver-no4z.onrender.com/cart';
async function fetchCartData(){
    try {
        let data = await axios.get(cartUrl);
        return data.data;
    } catch (error) {
        console.log('error occured while fetching data in the cart redux store while whole getting the data')
    }
}