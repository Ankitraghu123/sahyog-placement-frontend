import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";



const getAllJob = async ()=>{
    const response = await axios.get(`${base_url}job/getAll`)
    return response.data
}

const getSingleJob = async (id)=>{
    const response = await axios.get(`${base_url}job/get/${id}`)
    return response.data
}

const applyJob = async(data)=>{
    const response = await axios.post(`${base_url}apply/`,{jobId : data.id,candidateId:data.candidateId},config)
    return response.data
}

const isAlreadyApplied = async(id)=>{
    const response = await axios.get(`${base_url}apply/isApplied/${id}`,config)
    return response.data
}


const jobService = { getAllJob,getSingleJob,applyJob,isAlreadyApplied}

export default jobService
