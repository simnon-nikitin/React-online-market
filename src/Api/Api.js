
import axios from "axios";

const apiURL = 'https://64306a06b289b1dec4c7f3e7.mockapi.io'

export const getCartItems = async function() {

    const { data } = await axios.get(`${apiURL}/cart`)
      
    return data
}

export const getProducts = async function(){

    const { data } = await axios.get(`${apiURL}/products`)
      
    return data
}

export const addItemToCart = async function(obj) {

    const response = await axios.post(`${apiURL}/cart`, obj)
       
    return response
}
export const deleteItemFromCart = async function(obj) {

    const response = await axios.delete(`${apiURL}/cart${obj.id}`)
       
    return response
}