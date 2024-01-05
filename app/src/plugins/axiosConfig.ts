import axios from 'axios';

const instance = axios.create({
    baseURL: "https://cryptodire.kontinentalist.com/api/v1/stories"
})

export function useAxios() {
    // For potential future where baseURL is configurable
    // Simply pass in a function here which fetches baseURL from theme settings
    return instance
}