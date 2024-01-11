import { combineReducers } from "redux";
import User from './User';
import Product from "./Product";
import Address from "./Address";

export default combineReducers({
   user: User,
   Product: Product,
   Address: Address,
   // DefaultAddress: ,
})