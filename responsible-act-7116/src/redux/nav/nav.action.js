import * as types from './nav.actionTypes'
import { fetchNavData } from './nav.api';

export const getNavItems = ()=>async (dispatch)=>{
    dispatch({type:types.NAV_LOADING});
    try {
        let data = await fetchNavData();
        if(data){
            dispatch({type:types.NAV_GET_DATA, payload:data});
        }
    } catch (error) {
        dispatch({type:types.NAV_ERROR})
    }
}
