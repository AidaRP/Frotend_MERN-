import store from "../store";
import axios from "axios";

const API_URL ="http://localhost:5500"
export const register = async (dataUser) => {
    try {
        let res = await axios.post(API_URL + "/users/register", dataUser);
      return res;
    } catch (error) {
      console.log(error);
    }
  };