import { API_BASE_URL } from "../Constant/Url";
import { ROUTE } from "../Routes/Routes";

export const loginApi = async (loginData) => {
    const res = await fetch(API_BASE_URL + ROUTE.Login, {
        method:"post",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(loginData)
    })
    return res.json()
}

export const signUpApi = async(signUpData)=>{
    const res = await fetch(API_BASE_URL + ROUTE.Signup,{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(signUpData)
    })
    return res.json()
}

export const productApi = async()=>{
    const res = await fetch(API_BASE_URL+ROUTE.GetProduct,{
        method:"get",
        headers:{
            "Content-type":"application/json"
        }
    })
    return res.json()
}

export const singleProductApi = async(id)=>{
    const res = await fetch(`${API_BASE_URL}${ROUTE.SingleProduct}${id}`,{
        method:"get",
        headers:{
            "Content-type":"application/json"
        }
    })
    return res.json()
}