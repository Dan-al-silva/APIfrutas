import axios from "axios";

const api = axios.create({
    baseURL:"http://10.133.47.16:3000"
});


export default api