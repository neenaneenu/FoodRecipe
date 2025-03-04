import axios from  "axios"

export const recipie = axios.create({
    baseURL : import.meta.env.VITE_ORIGIN
})

recipie.interceptors.request.use((config)=>{
    const token = localStorage.getItem("access_token") || null
    console.log(token)
    config.headers.Authorization = `Bearer ${token}`
    return config
})
