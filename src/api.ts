import axios from "axios";

const api = axios.create({
    baseURL: 'https://dev-gateway.7mojos.com/',
});
  
export default api;