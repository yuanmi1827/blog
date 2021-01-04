import axios from 'axios'
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : window.origin

axios.interceptors.request.use((config) => {
  return config
})
axios.interceptors.response.use((response) => {
  if(response.status === 200) {
    return response.data
  }
}, (error) => {
  throw error
})

export default axios
