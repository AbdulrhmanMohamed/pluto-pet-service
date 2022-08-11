import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteAllSeen = createAsyncThunk('deleteAllSeen/notifications', async (dummy,{getState}) => {
    console.log('before Token')
    const {token}=getState().loginSlice;
    const { data } = await axios.post('/api/user/deleteAllSeen',{},{
        headers:{
            'authorization':'Bearer'+'  '+ token
        }
    });
    
    return data;
})

const initialState = {
   
    deleteAllSeenMessage:null,
    deleteAllSeenError:false,
    deleteAllSeenErrMessage:null,
    deleteAllSeenSuccess:false,
}

const deleteAllSeenSlice = createSlice({
    name: 'deleteAllSeen',
    initialState,
   
    extraReducers: {
        [deleteAllSeen.pending]: (state) => {
            state.deleteAllSeenLoading = true;
        },
        [deleteAllSeen.fulfilled]: (state, action) => {
            
            state.deleteAllSeenMessage = action.payload.message;
            state.deleteAllSeenSuccess=action.payload.success;
            state.deleteAllSeenLoading = false;
        },
        [deleteAllSeen.rejected]: (state,action) => {
            state.deleteAllSeenSuccess=false;
            state.deleteAllSeenMessage=null;
            state.deleteAllSeenError = true;
            // state.deleteAllSeenErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default deleteAllSeenSlice.reducer

