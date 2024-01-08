import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";



async function category() {
    let endpoint = 'product/fetch/getCategories';
    // console.log(HttpClient.post(endpoint, data));
    return HttpClient.post(endpoint, {});
}

async function subCategory(data) {
    let endpoint = 'product/fetch/getSubCategories';
    return HttpClient.post(endpoint, data);
}

async function productList(data) {
    let endpoint = 'product/fetch/getProducts';
    return HttpClient.post(endpoint, data);
}

async function addCart(data) {
    let endpoint = 'cart/addToCart';
    return HttpClient.post(endpoint, data);
}

async function fetchCart() {
    let endpoint = 'cart/cartItems';
    return HttpClient.get(endpoint);
}

async function buy() {
    let endpoint = 'cart/checkout';
    return HttpClient.get(endpoint);
}

async function remove(data) {
    let endpoint = 'cart/removeFromCart';
    return HttpClient.Delete(endpoint, data);
}

async function quantity(data) {
    let endpoint = 'cart/changeItemQuantity';
    return HttpClient.post(endpoint, data);
}

const ProductService = {
    category,
    subCategory,
    productList,
    addCart,
    buy,
    remove,
    fetchCart,
    quantity
}

export default ProductService;