import axios from 'axios'

const baseURL=import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance=axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'aplication/json',
    }
})

// Request Intercepetor

axiosInstance.interceptors.request.use(
    function(config){
        
        const accessToken=localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization']=`Bearer ${accessToken}`
        }
        return config
        },
        function(error){
            return Promise.reject(error)
        }
)

//Response Interceptor



axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');
      try {
        // plain axios: no interceptors, no expired Authorization header
        const { data } = await axios.post(
          `${axiosInstance.defaults.baseURL}/token/refresh/`,
          { refresh: refreshToken }
        );

        localStorage.setItem('accessToken', data.access);
        // if ROTATE_REFRESH_TOKENS is True in SimpleJWT, also save the new refresh token:
        if (data.refresh) localStorage.setItem('refreshToken', data.refresh);

        originalRequest.headers['Authorization'] = `Bearer ${data.access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
      
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
       
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
        

    
    


export default axiosInstance