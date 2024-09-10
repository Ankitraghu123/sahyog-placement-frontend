import axios from "axios";
import { base_url } from "../../utils/base_url";



const registerCompany = async (companyData)=>{
    const response = await axios.post(`${base_url}company/register`,companyData)
    return response.data
}


const companyService = { registerCompany}

export default companyService
