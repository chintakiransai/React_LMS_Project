import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL ="http://localhost:8080/"
axiosInstance.defaults.withCredentials=true
axiosInstance.defaults.timeout=30000

export default axiosInstance