import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
   
    res:null
}

const getAllApprovedDoctorSlice = createSlice({
    name: 'deleteAllSeen',
    initialState,
    reducers:{
        getAllApprovedDoctor:async(state)=>{
            const {data}=await axios.get('/api/user/getAllApprovedDoctor')
            state.res=data;
        }
    }
   
})

export default getAllApprovedDoctorSlice.reducer
export const {getAllApprovedDoctor}=getAllApprovedDoctorSlice.actions;

