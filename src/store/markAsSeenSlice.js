import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const markAllAsSeen = createAsyncThunk('markAllAsSeen/notifications', async (dummy,{getState}) => {
    const {token}=getState().loginSlice;
    const { data } = await axios.post('/api/user/markAllAsSeen',{},{
        headers:{
            'authorization':'Bearer'+'  '+ token
        }
    });
    
    return data;
})

const initialState = {
   
    markAllAsSeenMessage:null,
    markAllAsSeenError:false,
    markAllAsSeenErrMessage:null,
    markAllAsSeenSuccess:false,
}

const markAllAsSeenSlice = createSlice({
    name: 'markAllAsSeen',
    initialState,
   
    extraReducers: {
        [markAllAsSeen.pending]: (state) => {
            state.markAllAsSeenLoading = true;
        },
        [markAllAsSeen.fulfilled]: (state, action) => {
            state.users=action.payload.res;
            state.markAllAsSeenMessage = action.payload.message;
            state.markAllAsSeenSuccess=action.payload.success;
            state.markAllAsSeenLoading = false;
        },
        [markAllAsSeen.rejected]: (state,action) => {
            state.markAllAsSeenSuccess=false;
            state.markAllAsSeenMessage=null;
            state.markAllAsSeenError = true;
            // state.markAllAsSeenErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default markAllAsSeenSlice.reducer

