import axios from 'axios'


const url = 'https://apiserver-no4z.onrender.com'
export async function fetchNavData(type='dresses'){
    try {
        let data = await axios.get(`${url}/${type}`);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}

export async function postNavData(obj,type= 'dresses'){
    try {
        let data = await axios.post(`${url}/${type}`, obj);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}
export async function deleteNavData(id,type= 'dresses'){    
    try {
        let data = await axios.delete(`${url}/${type}/${id}`);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}


