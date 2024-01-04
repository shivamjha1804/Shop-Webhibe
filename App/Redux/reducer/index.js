import { combineReducers } from "redux";
import User from './User';
import Product from "./Product";

export default combineReducers({
   user: User,
   Product: Product
})