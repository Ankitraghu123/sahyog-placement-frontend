import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import companyService from "./companyService";
import { toast } from "react-toastify";


export const registerCompany = createAsyncThunk('company/register',async(companyData,thunkApi)=>{
    try{
        return await companyService.registerCompany(companyData)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})


const initialState = {
    company:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')

export const companySlice = createSlice({
    name:"company",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            builder.addCase(registerCompany.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(registerCompany.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.companyData = action.payload
                if(state.isSuccess == true){
                    toast.info("Company Registered")
                }
            })
            .addCase(registerCompany.rejected,(state,action)=>{
                state.isLoading = false
                state.isError=true
                state.isSuccess = false
                state.companyData = null
                if(state.isError == true){
                    console.log(action)
                    toast.error(action.payload.response.data.message)
                }
            })

        // .addCase(resetState,()=> initialState)
    }
})

export default companySlice.reducer