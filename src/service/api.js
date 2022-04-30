import axios from 'axios';
import authHeader from './AuthProvider';


const auth = axios.create({
    baseURL : `https://afternoon-brook-99525.herokuapp.com/auth`
})

const api = axios.create({
    baseURL : `https://afternoon-brook-99525.herokuapp.com/api`
})

const login = (username, password) => {
    return auth
      .post('/',{
        username,
        password,
      })
      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response;
      });
  };

const model = () => {
    return api.get(`/user/profile`,
    {
        headers: authHeader()
    }
    );
}

export {auth,api,login,model};