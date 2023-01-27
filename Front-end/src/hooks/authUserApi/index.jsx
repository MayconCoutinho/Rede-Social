import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export const validateToken = async (token) =>{
  const response = await axios.get(`${BASE_URL}login/${token}`)
  return response.data
}
export const UserLogin =  async (email, password) => {
    try {
        const body = {
          email,
          password
      }
        const response = await axios.post(`${BASE_URL}login`, body)
        return response.data
      } catch(error){
        console.log(error.response)
      } 
};
