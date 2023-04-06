
import axios from "axios";

const allproductUrl  = 'https://apiserver-no4z.onrender.com/allproduct';
export async function fetchAllProductData(type){
    try {
        let data = await axios.get(`https://apiserver-no4z.onrender.com/${type}`);
        return data.data;
    } catch (error) {
        console.log('error occured in the allProduct redux store while getting the data')
    }
}
export async function fetchPostAllProductData(obj, type){
    console.log(obj)
    try {
        let data = await axios.post(`https://apiserver-no4z.onrender.com/${type}`,obj);
        console.log(data.data);
        return data.data;
    } catch (error) {
        console.log('error occured in the allProduct redux store while posting the data')
    }
}


export async function fetchUpdateAllProductData(id , obj, type){
    try {
        let data = await axios.patch(`https://apiserver-no4z.onrender.com/${type}/${id}`, obj);
        return data.data;
    } catch (error) {
        console.log('error occured in the allproduct redux store while updating the data')
    }
}

export async function fetchDeleteAllProductData(id, type){
    console.log(id)
    try {
        let data = await axios.delete(`https://apiserver-no4z.onrender.com/${type}/${id}`);
        console.log(data, `${allproductUrl}/${id}`)
        return data.data;
    } catch (error) {
        console.log('error occured in the allproduct redux store while deleting the data')
    }
}