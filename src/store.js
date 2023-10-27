import { combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productsReducer from './Slices/ProductsSlice'
import productReducer from './Slices/ProductSlice'

const reducer = combineReducers({
  //create Product Reducer //ovoru actions kum state ah mathurathu thaan entha reducer oda vella 
  productsState : productsReducer,
  productState : productReducer
  
})

const store =configureStore({  //configureStore is one of the method here we calling the method
    reducer,  //reducer is help to change the state 
    middleware : [thunk]  //thung middleware namma actions ah nerathuku kattu padama vella seiya vaikum  , async ah vella seiya vaikum
})
export default store;