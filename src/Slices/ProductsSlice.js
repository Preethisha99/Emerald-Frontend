import { createSlice} from "@reduxjs/toolkit"

const productsSlice =  createSlice ({
    name: "products",
    initialState : {
        loading: false
    },
    reducers: {
        //action creator
        productsRequest(state, action){
            return{
                loading: true
            }
        },
        //action creator
        productsSuccess(state,action){
            return{
                loading: false,
                products: action.payload.product,
                productsCount: action.payload.count,
                resPerPage: action.payload.resPerPage
            }
        },
        //action creator
        productsFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions , reducer } = productsSlice 

export const { productsRequest ,productsSuccess,  productsFail} = actions;

export default reducer;
