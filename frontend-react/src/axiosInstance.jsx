import axios from 'axios'


const base_url = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    function(config) {
        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    }, function(error) {
        return Promise.reject(error)
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    function(response) {
        return response 
    }, 
    // Handle failed responses
    async function(error) {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try {
                const rsponse = await axiosInstance.post('/token/refresh/', {refresh: refreshToken})
                localStorage.setItem('accessToken', response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance[originalRequest]
            }catch(error) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                window.location.href = '/login'
                return Promise.reject(error)
            }
        }
    }
)

export default axiosInstance