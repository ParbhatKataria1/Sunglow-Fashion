import axios from 'axios'


const url = 'https://apiserver-no4z.onrender.com/clothing'
export async function fetchNavData(){
    try {
        let data = await axios.get(url);
        return data.data;
    } catch (error) {
        console.log('there is an error in the fetchNavData function in redux store')
    }
}