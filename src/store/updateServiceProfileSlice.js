import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateServiceProfile = createAsyncThunk('updateServiceProfile/data', async (values,{getState}) => {
    const {token}=getState().loginSlice;
    const { data } = await axios.post('/api/service/updateServiceProfile',values,{
        headers:{
            'authorization':'Bearer' +'  ' +token
        }
    });
    
    return data;
})

const initialState = {
   
    res:null,
    
    updateServiceProfileError:false,
    updateServiceProfileErrMessage:null,
}

const updateServiceProfileSlice = createSlice({
    name: 'updateServiceProfile',
    initialState,
   
    extraReducers: {
        [updateServiceProfile.pending]: (state) => {
            state.updateDoctorLoading = true;
        },
        [updateServiceProfile.fulfilled]: (state, action) => {
           state.res=action.payload;
           state.updateDoctorLoading=false;
        },
        [updateServiceProfile.rejected]: (state,action) => {
            state.errMessage=action.error.message;
            // state.updateServiceProfileErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default updateServiceProfileSlice.reducer

