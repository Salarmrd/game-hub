import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"f8ec5447bc2947e5b87e05933454d751"
    }
})