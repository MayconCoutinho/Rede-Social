import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';

export const PostLogin =  async (email, password) => {
    try {
        const body = {
          email,
          password
      }
        const response = await axios.post(`${BASE_URL}login`, body)
        console.log(response.data)
        
        return response.data
      } catch(error){
        alert(error.response.data.message)
      } 
};
export const PostSignup =  async (formValues) => {
  try {
      const body = {
        name: formValues.name,
        email : formValues.email,
        password: formValues.password
    }
      const response = await axios.post(`${BASE_URL}register`, body)
      alert(response.data.message)
      
      return response.data
    } catch(error){
      alert("Algo deu errado")
    } 
};
export const GetInfoUser =  async (token) => {
  try {
      const response = await axios.get(`${BASE_URL}`, { headers: { authorization: token }})
      console.log(response.data)
      
      return response.data
    } catch(error){
      console.log(error.response)
    } 
};
export const GetFeed =  async (token) => {
  try {
      const response = await axios.get(`${BASE_URL}posts`, { headers: { authorization: token }})
      console.log(response.data)
      
      return response.data
    } catch(error){
      console.log(error.response)
    } 
};
