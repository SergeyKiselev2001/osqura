
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



// let body = {
//     "email": "iqvuyxuhdigbkmmvxshpvpjputexzrhvzfhobfeexzszsjiksghiuejwxqiijigjxfeptrzkltovpffwgbbdhuqconfdmzfcokalskymxkadszppvychaetsubdxtafzrcwemwreuwzvwluyfhnais",
//     "password": "in"
// };

// fetch(url, {
//     method: "POST",
//     headers,
//     body: JSON.stringify(body),
// }).then(response => response.json());
 

// export const authAPI = {
//     authMe(){
//         return axiosInstance.get("auth/me").then((res)=>res.data);
//     },

//     tryToLogin(login, password, rememberMe){
//         return axiosInstance.post("auth/login", {
//             email: login,
//             password : password,
//             rememberMe : rememberMe
//         }).then((res)=>{
//             return res.data;
//         })
//     }
// }



export const API_1 = {

    sendEmailToCheck(email){
        return axiosInstance.post('check-email', {
            email: email
        });
    }

}