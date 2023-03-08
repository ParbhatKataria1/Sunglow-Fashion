import * as types from './nav.actionTypes'
import { deleteNavData, fetchNavData, postNavData } from './nav.api';

export const getNavItems = (type='dresses')=>async (dispatch)=>{
    dispatch({type:types.NAV_LOADING});
    try {
        let data = await fetchNavData(type);
        if(data){
            dispatch({type:types.NAV_GET_DATA, payload:data});
        }
    } catch (error) {
        dispatch({type:types.NAV_ERROR})
    }
}


export const postNavItems = (obj, type='dresses')=>async (dispatch)=>{
    console.log(obj)
    dispatch({type:types.NAV_LOADING});
    try {
        let data = await postNavData(obj, type);
        if(data){
            console.log('data', data)
            dispatch({type:types.NAV_POST_DATA, payload:data});
        }
    } catch (error) {
        dispatch({type:types.NAV_ERROR})
    }
}

export const deleteNavItems = (id, type='dresses')=>async (dispatch)=>{
    dispatch({type:types.NAV_LOADING});
    try {
        let data = await deleteNavData(id, type);
        if(data){
            console.log(data, id)
            dispatch({type:types.NAV_POST_DATA, payload:id});
        }
    } catch (error) {
        dispatch({type:types.NAV_ERROR})
    }
}


