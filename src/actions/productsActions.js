import axios from "axios"
import { productsFail, productsRequest, productsSuccess } from "../Slices/ProductsSlice"

export const getProducts = async(dispatch)=> {  //dispatch is a hook etha component kulla thaan kudukka mudium ,athula aenga (component kulla)uruvakki enga kudukurom
        try{
            dispatch(productsRequest())  //ethu kulla kudukuratha thaan payload la kedaikum
            const {data} = await axios.get('/api/v1/products')
            dispatch(productsSuccess(data))

        }catch(error){
            //handle error
            dispatch(productsFail(error.response.data.message))
        }
}