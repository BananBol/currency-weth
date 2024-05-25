import axios from "axios";

const axiosInstanced = axios.create({
  baseURL: 'https://thronesapi.com/'
})

export {
  axiosInstanced
}