import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";

async function signUp(data){
    let endpoint = 'auth/register';
    return HttpClient.post(endpoint, data);
}

const getAccount = async () => {
    return Storage.get('account');
}


async function setAccount(data) {
    return await Storage.set('account', data);
}


async function setToken(data) {
    return await Storage.set('token', data);
}


async function login(data) {
    let endpoint = 'auth/login';
    return HttpClient.post(endpoint, data);
}

const AuthService = {
    getAccount,
    setAccount,
    setToken,
    login,
    signUp,
}

export default AuthService;