import * as types from './signup.actionTypes';

export  const postSignUpRequest =(obj)=>async(dispatch)=>{
    try {
        let data = await fetchPostSignUp(obj);
    } catch (error) {
        
    }
}