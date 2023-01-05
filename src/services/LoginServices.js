import axios from 'axios';

const Auth = "http://localhost:8080/api/user/auth";

class LoginServices{

    getAuth(){
        return axios.get(Auth);
    }

    createAuth(auth){
        return axios.post(Auth, auth);
    }

    getAuthById(authId){
        return axios.get(Auth + '/' + authId);
    }

    
}