import axios from 'axios'


const url = 'https://apiserver-no4z.onrender.com/dresses'
export async function fetchNavData(){
    try {
        let data = await axios.get(url);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}

export async function postNavData(obj){
    try {
        let data = await axios.post(url, obj);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}
export async function deleteNavData(id){
    try {
        let data = await axios.delete(`${url}/${id}`);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}


