import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './globalstyles.css';

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormShelter from "./components/FormShelter";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Shelters from './components/Shelters';
import Details from './components/Details';
import ShelterDetail from './components/ShelterDetail';
import CreatePets  from "./components/CreatePets";

import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "./Redux/Actions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { ForgotPassword } from "./components/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword";
import { ConfirmedAccount } from "./components/ConfirmedAccount";
import { ReviewEmail } from "./components/ReviewEmail";
import LoginAdmin from "./components/LoginAdmin";
import { AdminRoutes } from "./AdminRoutes";
import { DashboardRoutesAdmin } from "./DashboardRoutesAdmin";
import { DashboardAdmin } from "./components/DashboardAdmin";



function App() {

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

 

  return (
    <BrowserRouter>

     
      <Routes>

        <Route path="/" element={

          <Home />
          
        } />


         <Route path="/Shelters" element={<Shelters/>}/>

        
         <Route path="/dashboard/CreatePets" element={
         <CreatePets/>}/>
       


        <Route path="/login" element={
          <PublicRoute>
            <Navbar/>
            <Login />

          </PublicRoute>
        } />

        
<Route path="/admin/login" element={
          <PublicRoute>
            <Navbar/>
            <LoginAdmin />

          </PublicRoute>
        } />

        <Route path="/register" element={
          <PublicRoute>
            <Navbar/>
            <FormShelter />

          </PublicRoute>
        } />






            <Route exact path="/details/:id" 
            element={ <Details/>  }>
          
        </Route>

<Route path="/forgotpassword" element={
          <PublicRoute>
            <Navbar/>
            <ForgotPassword/>
          </PublicRoute>
        } />

<Route path="/resetpassword/:token" element={
          <PublicRoute>
            <Navbar/>
            <ResetPassword/>
          </PublicRoute>
        } />

<Route path="/confirmaccount" element={
          <PublicRoute>
            <Navbar/>
            <ConfirmedAccount/>
          </PublicRoute>
        } />

<Route path="/reviewemail" element={
          <PublicRoute>
            <Navbar/>
            <ReviewEmail/>
          </PublicRoute>
        } />

<Route path="/shelters/:id/*" element={
          <>
            <Navbar/>
            <ShelterDetail />

          </>
        } />


        <Route path="/*" element={
          <PrivateRoute >
            <DashboardRoutes />
          </PrivateRoute>
        } />
    

      <Route path="/admin/*" element={
          <AdminRoutes>
            <DashboardRoutesAdmin />
          </AdminRoutes>
        } />



      </Routes>



      <Footer />

    </BrowserRouter>
  );
}

export default App;
