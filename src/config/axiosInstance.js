import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL ="https://localhost:8080/"
axiosInstance.defaults.timeout=2500

export default axiosInstance