import axios from "axios";
import {BASE_URL, endpoints} from "../constants/index.js"

export async function getAll(endpoint) {
    let result = { data: null, error: null };
    await axios.get(BASE_URL + endpoint).then((res) => {
        result = { ...result, data: res.data };
    }).catch((err)=>{
        result={...result,error:err};
    })
    return result;
}

export async function getOne(endpoint,id) {
    let result = { data: null, error: null };
    await axios.get(`${BASE_URL}${endpoint}/?id=${id}`).then((res) => {
        result = { ...result, data: res.data[0] };
    }).catch((err)=>{
        result={...result,error:err};
    })
    return result;
}

export async function deleteOne(endpoint,id){
    let result = {data:null,err:null}
    await axios
    .delete(BASE_URL+endpoint+`/${id}`)
    .then((res)=>{
        result = {...result,data:res.data}
    }).catch((err)=>{
        result = {...result,error:err}
    })
    
    return result
    }
    

