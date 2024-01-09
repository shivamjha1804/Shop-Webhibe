import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";


async function addAddress(data) {
    let endpoint = 'address/addAddress';
    return HttpClient.post(endpoint, data);
}


const AddressService = {
   addAddress
}

export default AddressService;