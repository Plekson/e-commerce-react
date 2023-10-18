import axios from "axios";
import API_BASE_URL from "./apiConfig";
import { Product } from "./types"

export const getProducts = async(productId?: number, page: number = 0, size: number = 0): Promise<{content: Product[]}> => {
    try{
        const endpoint = productId
        ? `${API_BASE_URL}/products/${productId}`
        : `${API_BASE_URL}/products/all`;

        const response = await axios.get(endpoint);
        return response.data;
    }
    catch(error){
        console.log("Błąd pobierania danych", error)
        throw error;
    }
};

export type {Product};

