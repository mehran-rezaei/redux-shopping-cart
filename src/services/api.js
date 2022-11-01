import axios from "axios"
const BASE_URL = "https://fakestoreapi.com"
const getproducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data;
}
export { getproducts }