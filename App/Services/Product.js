import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";



async function category(){
    let endpoint = 'product/fetch/getCategories';
    // console.log(HttpClient.post(endpoint, data));
    return HttpClient.post(endpoint, {});
}

async function subCategory(data){
    let endpoint = 'product/fetch/getSubCategories';
    return HttpClient.post(endpoint, data);
}

async function productList(data){
    let endpoint = 'product/fetch/getProducts';
    return HttpClient.post(endpoint, data);
}

async function addCart(data){
    let endpoint = 'cart/cartItems';
    return HttpClient.get(endpoint, data);
}

async function buy(){
    let endpoint = 'cart/checkout';
    return HttpClient.get(endpoint);
}

async function remove(){
    let endpoint = 'cart/removeFromCart';
    return HttpClient.post(endpoint);
}

const ProductService = {
    category,
    subCategory,
    productList,
    addCart,
    buy,
    remove
}

export default ProductService;