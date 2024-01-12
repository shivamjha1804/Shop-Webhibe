import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";


async function putProfile(data) {
    let endpoint = 'profile/updateProfile';
    return HttpClient.put(endpoint, data);
}

async function getProfile() {
    let endpoint = 'profile/getProfile';
    return HttpClient.get(endpoint, {});
}

async function uploadProfile(data){
    let endpoint = 'product/modify/image/addProductImage';
    return HttpClient.FileUpload(endpoint, data, {})
}

const ProfileService = {
    putProfile,
    getProfile,
    uploadProfile
}

export default ProfileService;