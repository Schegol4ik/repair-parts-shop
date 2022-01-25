import axios from "axios";


export default class productsService {
    static async getAll(){
        const response = await axios.get('https://datainlife.ru/junior_task/get_products.php')
        return response
    }
}