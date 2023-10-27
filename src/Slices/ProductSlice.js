import { createSlice} from "@reduxjs/toolkit"

const productSlice =  createSlice ({
    name: "product",
    initialState : {
        loading: false,
        product: {} //empty object ah erukka pothu
    },
    reducers: {
        //action creator
        productRequest(state, action){
            return{
                loading: true
            }
        },
        //action creator
        productSuccess(state,action){
            return{
                loading: false,
                product: action.payload.product
            }
        },
        //action creator
        productFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions , reducer } = productSlice 

export const { productRequest ,productSuccess,  productFail} = actions;

export default reducer;
