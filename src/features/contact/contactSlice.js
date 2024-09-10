import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "./contactService";
import { toast } from "react-toastify";


export const contact = createAsyncThunk('create-enquiry',async(data,thunkApi)=>{
    try{
        return await contactService.contact(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})



export const resetState=createAction('Reset_all')

const initialState = {
    contact:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(contact.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(contact.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.contact = action.payload
            toast.success("enquiry sent")
        })
        .addCase(contact.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.jobs = null
            toast.error(action.payload.response.data.message)
        })
       

        // .addCase(resetState,()=> initialState)
    }
})

export default contactSlice.reducer