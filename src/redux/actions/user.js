import store from "../store";
import axios from "axios";
import { API_URL } from "../../utility";
export const register = async (dataUser) => {
    try {
        let res = await axios.post(API_URL + "/users/register", dataUser);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (user) => {
    try {
        let res = await axios.post(API_URL + "/users/login", user);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// export const logout = async (dataUser) => {
//     try {
//         let res = await axios.post(API_URL + "/users/login", dataUser);
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };
