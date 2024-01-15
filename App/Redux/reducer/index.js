import { combineReducers } from "redux";
import User from './User';
import Product from "./Product";
import Address from "./Address";
import Profile from "./Profile";

export default combineReducers({
   user: User,
   Profile: Profile,
   Product: Product,
   Address: Address,
   // DefaultAddress: ,
})