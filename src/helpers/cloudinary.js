import axios from 'axios'

export const cloudynary = (formData) => {

    return axios.post("https://api.cloudinary.com/v1_1/dtb4lcidq/upload", formData)

}