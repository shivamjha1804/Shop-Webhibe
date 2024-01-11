import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";


async function addAddress(data) {
    let endpoint = 'address/addAddress';
    return HttpClient.post(endpoint, data);
}

async function getAddress(){
    let endpoint = 'address/showAddress';
    return HttpClient.get(endpoint, {});
}

async function deleteAddress(data){
    let endpoint = 'address/deleteAddress';
    // console.log("Dta:", data);
    return HttpClient.Delete(endpoint, data);
}

async function defaultAddress(data){
    let endpoint = 'address/changeDefault';
    // console.log("Dta:", data);
    return HttpClient.put(endpoint, data);
}



const AddressService = {
   addAddress,
   getAddress,
   deleteAddress,
   defaultAddress
}

export default AddressService;