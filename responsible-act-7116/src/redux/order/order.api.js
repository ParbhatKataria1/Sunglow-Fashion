
import axios from "axios";

// const cartUrl  = 'https://apiserver-no4z.onrender.com/cart';

const orderUrl = 'https://orderlist-h7mt.onrender.com/orderList'

export async function fetchOrderData(){
    try {
        let data = await axios.get(orderUrl);
        console.log('data', data.data)
        return data.data;
    } catch (error) {
        console.log('error occured in the order redux store while getting the data')
    }
}
export async function fetchPostOrderData(obj){
    console.log(obj, 'inside the redux')
    try {
        let data = await axios.post(orderUrl,obj);
        console.log(data.data);
        return data.data;
    } catch (error) {
        console.log('error occured in the order redux store while posting the data')
    }
}


export async function fetchUpdateOrderData(id , obj){
    try {
        let data = await axios.patch(`${orderUrl}/${id}`, obj);
        return data.data;
    } catch (error) {
        console.log('error occured in the order redux store while updating the data')
    }
}

export async function fetchDeleteOrderData(id){
    try {
        let data = await axios.delete(`${orderUrl}/${id}`);
        return data.data;
    } catch (error) {
        console.log('error occured in the order redux store while deleting the data')
    }
}