
const cartUrl  = 'https://apiserver-no4z.onrender.com/cart';
export async function fetchCartData(){
    try {
        let data = await axios.get(cartUrl);
        return data.data;
    } catch (error) {
        console.log('error occured in the cart redux store while getting the data')
    }
}
export async function fetchPostCartData(obj){
    try {
        let data = await axios.post(cartUrl, obj);
        console.log(data);
        return data.data;
    } catch (error) {
        console.log('error occured in the cart redux store while posting the data')
    }
}


export async function fetchUpdateCartData(id , obj){
    try {
        let data = await axios.patch(`${cartUrl}/${id}`, obj);
        return data.data;
    } catch (error) {
        console.log('error occured in the cart redux store while updating the data')
    }
}

export async function fetchDeleteCartData(id){
    try {
        let data = await axios.delete(`${cartUrl}/${id}`, obj);
        return data.data;
    } catch (error) {
        console.log('error occured in the cart redux store while deleting the data')
    }
}