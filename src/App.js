import 'antd/dist/antd.min.css';
import {Button } from 'antd'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home';
import { useSelector } from 'react-redux';
import Loader from './component/loader';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import Doctor from './pages/Doctor/Doctor';
import Notifications from './pages/notifications/Notifications';
import UsersList from './pages/usersList/UsersList';
import DoctorsList from './pages/DoctorsList/DoctorsList';
import DoctorProfile from './pages/doctorProfile/DoctorProfile';
import ApplyService from './pages/applyService/ApplyService';
import ServicesList from './pages/servicesList/ServicesList';
import ServiceProfile from './pages/serviceProfile/ServiceProfile';
import DoctorHome from './pages/doctorHome/DoctorHome';
import ServiceHome from './pages/serviceHome/ServiceHome';
import Advices from './pages/Advices/Advices';
function App() {
  const {loading}=useSelector(state =>state.loaderSlice)
  return (
    
    <div className="App ">
      {loading && <Loader/>}
      {/* <Loader/> */}
      <Toaster
  position="top-center"
  reverseOrder={false}
/>

     <Routes>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/"  element={<Home/>}/>
      <Route path="/advices"  element={<Advices/>}/>
      <Route path="/doctorHome"  element={<DoctorHome/>}/>
      <Route path="/serviceHome"  element={<ServiceHome/>}/>
      <Route path="/doctor"  element={<Doctor/>}/>
      <Route path="/service"  element={<ApplyService/>}/>
      <Route  path='/notifications' element={<Notifications/>}/>
      <Route  path='/usersList' element={<UsersList/>}/>
      <Route  path='/doctorsList' element={<DoctorsList/>}/>
      <Route  path='/servicesList' element={<ServicesList/>}/>
      <Route  path='/doctorProfile' element={<DoctorProfile/>}/>
      <Route  path='/serviceProfile' element={<ServiceProfile/>}/>
     </Routes>
    </div>
  );
}

export default App;
