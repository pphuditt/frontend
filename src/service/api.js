import axios from 'axios';
import authHeader from './AuthProvider';


const auth = axios.create({
    baseURL : `http://localhost:8080/auth`
})

const api = axios.create({
    baseURL : `http://localhost:8080/api`
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
  
        return response.data;
      });
  };

const model = () => {
    return api.post(`aircraft`,{
        regNum: "AVDE",
        ICAOCode: "A320",
        MSN: "1321",
        firstFlight: "2022-08-07",
        deliverDate: "2022-08-07"
    },
    {
        headers: authHeader()
    }
    );
}

export {auth,api,login,model};