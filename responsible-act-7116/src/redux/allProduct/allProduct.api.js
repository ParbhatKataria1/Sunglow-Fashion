
import axios from "axios";

const allproductUrl  = 'https://apiserver-no4z.onrender.com/allproduct';
export async function fetchAllProductData(){
    try {
        let data = await axios.get('https://apiserver-no4z.onrender.com/allproduct');
        return data.data;
    } catch (error) {
        console.log('error occured in the allProduct redux store while getting the data')
    }
}
export async function fetchPostAllProductData(obj){
    try {
        let data = await axios.post(allproductUrl,obj);
        console.log(data.data);
        return data.data;
    } catch (error) {
        console.log('error occured in the allProduct redux store while posting the data')
    }
}


export async function fetchUpdateAllProductData(id , obj){
    try {
        let data = await axios.patch(`${allproductUrl}/${id}`, obj);
        return data.data;
    } catch (error) {
        console.log('error occured in the allproduct redux store while updating the data')
    }
}

export async function fetchDeleteAllProductData(id){
    console.log(id)
    try {
        let data = await axios.delete(`${allproductUrl}/${id}`);
        console.log(data, `${allproductUrl}/${id}`)
        return data.data;
    } catch (error) {
        console.log('error occured in the allproduct redux store while deleting the data')
    }
}