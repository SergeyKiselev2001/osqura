
import axios from "axios";

// const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

// const axiosInstance = axios.create({
//     withCredentials: true,
//     baseURL: BASE_URL,
//     headers: {
//         "API-KEY": "{XXXX}",
//     },
// });


const API_TOKEN = 'xpuFTkPM2M5GWtatDZpiQb2Rxr3PE4gV80ZOW3QG';

// api/v1/auth/check-email


const BASE_URL= "https://lumus.wistis.ru/api/v1/auth/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${API_TOKEN}`
    },
});




export const API_1 = {

    sendEmailToCheck(email){
        debugger;
        return axiosInstance.post('check-email', {
            email: email
        });
    },

    authorization(email, password){

        return axiosInstance.post('login', {
            email,
            password
        })
    },

    addUser(name, phone, email, password){

        return axiosInstance.post('register', {
            name, phone, email, password
        })
    }

}