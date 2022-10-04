import axios from 'axios';

export async function getSingleProduct(id) {
    const data = await axios.get(`http://192.168.0.101/products/detail/${id}/`);
    console.log(data.data);
    return data.data;
}
