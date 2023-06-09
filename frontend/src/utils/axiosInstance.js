import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://192.168.111.115:3333/api/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default httpClient;