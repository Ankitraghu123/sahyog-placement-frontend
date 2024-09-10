import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jobService from "./jobService";
import { toast } from "react-toastify";


export const getAllJob = createAsyncThunk('get-all-jobs',async(thunkApi)=>{
    try{
        return await jobService.getAllJob()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getSingleJob = createAsyncThunk('get-single-job',async(id,thunkApi)=>{
    try{
        return await jobService.getSingleJob(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const applyJob = createAsyncThunk('job/apply',async(data,thunkApi)=>{
    try{
        return await jobService.applyJob(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const isAlreadyApplied = createAsyncThunk('job/isApplied',async(id,thunkApi)=>{
    try{
        return await jobService.isAlreadyApplied(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})


const initialState = {
    job:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')

export const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllJob.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllJob.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.jobs = action.payload
        })
        .addCase(getAllJob.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.jobs = null
        })
        .addCase(getSingleJob.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getSingleJob.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.singleJob = action.payload
        })
        .addCase(getSingleJob.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.singleJob = null
        })
        .addCase(applyJob.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(applyJob.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.applyJob = action.payload
            if(state.isSuccess == true){
                toast.success("Job application submitted ")
            }
        })
        .addCase(applyJob.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.applyJob = null
            if(state.isSuccess == true){
                toast.error("job Application failed ")
            }
        })
        .addCase(isAlreadyApplied.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(isAlreadyApplied.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isAlreadyApplied = action.payload
           
        })
        .addCase(isAlreadyApplied.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.isAlreadyApplied = null
           
        })

        // .addCase(resetState,()=> initialState)
    }
})

export default jobSlice.reducer