
import axios from 'axios'

export default {

    methods: {
        getProducts() {
            //return fetch('https://fakestoreapi.com/products').then(res => res.json())
            return axios.get(`https://fakestoreapi.com/products`).then(({data}) => data)

        },
        getProduct(id){
        
            return  axios.get(`https://fakestoreapi.com/products/${id}`).then(({data}) => data)
        }
    }
}