import axios from "axios"
import { productFail, productRequest, productSuccess } from "../Slices/ProductSlice"

export const getProduct =  id => async(dispatch)=> {  //dispatch is a hook etha component kulla thaan kudukka mudium ,athula aenga (component kulla)uruvakki enga kudukurom
        try{         //ethu oru action ah velli eda pothu
            dispatch(productRequest())  //ethu kulla kudukuratha thaan payload la kedaikum
            const {data} = await axios.get(`/api/v1/product/${id}`)
            dispatch(productSuccess(data))

        }catch(error){
            //handle error
            dispatch(productFail(error.response.data.message))
        }
}