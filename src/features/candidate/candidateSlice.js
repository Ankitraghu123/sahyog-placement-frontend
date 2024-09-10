import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import candidateService from "./candidateService";

const getCandidateFromLocalStorage = localStorage.getItem('candidate') ? JSON.parse(localStorage.getItem('candidate')):null

export const registerCandidate = createAsyncThunk('auth/candidate-register',async(candidate,thunkApi)=>{
    try{
        return await candidateService.register(candidate)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const loginCandidate = createAsyncThunk('auth/candidate-login',async(candidate,thunkApi)=>{
    try{
        return await candidateService.login(candidate)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const candidateProfile = createAsyncThunk('auth/candidate-profile',async(thunkApi)=>{
    try{
        return await candidateService.candidateProfile()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const jobsAppliedByCandidate = createAsyncThunk('auth/job-applied-by-candidate',async(id,thunkApi)=>{
    try{
        return await candidateService.jobsAppliedByCandidate(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const editCandidate = createAsyncThunk('auth/edit-candidate',async(candidateData,thunkApi)=>{
    try{
        return await candidateService.editCandidate(candidateData)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

const initialState = {
    candidate:getCandidateFromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')

export const candidateSlice = createSlice({
    name:"candidate",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerCandidate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(registerCandidate.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.candidate = action.payload
            if(state.isSuccess == true){
                toast.info("User Created successfully")
                window.location.reload()
            }
        })
        .addCase(registerCandidate.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.candidate = null
            if(state.isError == true){
                // console.log(action)
                toast.error(action.payload.response?.data?.message)
            }
        })

        .addCase(loginCandidate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(loginCandidate.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.logedCandidate = action.payload
        })
        .addCase(loginCandidate.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.logedCandidate = null  
        })

        .addCase(candidateProfile.pending,(state)=>{
            state.isLoading = true
        })

        .addCase(candidateProfile.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.candidateProfile = action.payload
            // if(state.isSuccess == true){
            //     toast.info("User Created")
            // }
        })
        .addCase(candidateProfile.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.candidateProfile = null
            // if(state.isError == true){
            //     console.log(action)
            //     toast.error(action.payload.response.data.message)
            // }
        })

        .addCase(jobsAppliedByCandidate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(jobsAppliedByCandidate.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.jobsApllied = action.payload
            // if(state.isSuccess == true){
            //     toast.info("User Created")
            // }
        })
        .addCase(jobsAppliedByCandidate.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.jobsApllied = null
            // if(state.isError == true){
            //     console.log(action)
            //     toast.error(action.payload.response.data.message)
            // }
        })

        .addCase(editCandidate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(editCandidate.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.editedCandidate = action.payload
            if(state.isSuccess == true){
                toast.info("Profile edited")
            }
        })
        .addCase(editCandidate.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.editedCandidate = null
            if(state.isError == true){
            //     console.log(action)
                toast.error(action.payload.response.data.message)
            }
        })

        // .addCase(resetState,()=> initialState)
    }
})

export default candidateSlice.reducer