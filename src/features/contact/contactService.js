import axios from "axios";
import { base_url } from "../../utils/base_url";

const contact = async (data)=>{
    const response = await axios.post(`${base_url}contact/create`,data)
    return response.data
}




const jobService = { contact}

export default jobService
