import axios from "axios";

const SIGNUP_API_BASE_URL = "http://localhost:8089/api/v1/auth/customer/signup";
class SignUpService {
 saveUser(user){
     return axios.post(SIGNUP_API_BASE_URL, user);
 }
}
export default new SignUpService(); 