import axios from 'axios';

const instance = axios.create({
    baseURL: "https://cryptodire.kontinentalist.com/api/v1/stories"
})

export default instance