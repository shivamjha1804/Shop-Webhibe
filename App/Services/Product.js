import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";



async function category(data){
    let endpoint = 'product/fetch/getCategories';
    return HttpClient.post(endpoint, data);
}


const ProductService = {
    category
}

export default ProductService;