import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderSlice from './loaderSlice'
import userSlice from "./userSlice";
import loginSlice from "./loginSlice";
import applyDoctorSlice from "./applyDoctorSlice";
import getAllusersSlice from "./getAllusersSlice";
import getAllDoctorsSlice from "./getAllDoctorsSlice";
import markAllAsSeenSlice from './markAsSeenSlice'
import deleteAllSeenNotificationSlice from "./deleteAllSeenNotificationSlice";
import changeDoctorStatusSlice from './changeDoctorStatusSlice';
import getDoctorProfileSlice from './getDoctorProfileSlice'
import updateDoctorProfileSlice from "./updateDoctorProfileSlice";
import getAllApprovedDoctorSlice from "./getAllApprovedDoctor";
import getAllServicesSlice from './getAllServicesSlice'
import changeServiceStatusSlice from './changeServiceStatusSlice'
import getServiceProfileSlice from './getServiceProfile'
import updateServiceProfileSlice from './updateServiceProfileSlice'
const reducer=combineReducers({
    loaderSlice,
    userSlice,
    loginSlice,
    applyDoctorSlice,
    getAllusersSlice,
    getAllDoctorsSlice,
    markAllAsSeenSlice,
    deleteAllSeenNotificationSlice,
    changeDoctorStatusSlice,
    getDoctorProfileSlice,
    updateDoctorProfileSlice,
    getAllApprovedDoctorSlice,
    getAllServicesSlice,
    changeServiceStatusSlice,
    getServiceProfileSlice,
    updateServiceProfileSlice
})

const store=configureStore({
    reducer:reducer,
})
export default store