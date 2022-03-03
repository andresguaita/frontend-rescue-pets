import React from 'react'
import { Routes, Route} from "react-router-dom";
import { AnswerFormView } from './components/AnswerFormView';
import { ChangePassword } from './components/ChangePassword';
import { Dashboard } from './components/Dashboard';
import { DashboardCreateForm } from './components/DashboardCreateForm';
import { DashboardForms } from './components/DashboardForms';
import NavbarDashboard from './components/NavbarDashboard';
import PetsInDashboard from './components/PetsInDashboard'
import { ShelterProfile } from './components/ShelterProfile';
import FollowUp from './components/FollowUp';
import { DashboardAdmin } from './components/DashboardAdmin';



export const DashboardRoutesAdmin = () => {
    return (
        <div>
   
        <div className='container'>
        <NavbarDashboard/>
            <Routes>
                <Route path="dashboard" element={<DashboardAdmin />} />
               
            
           
            </Routes>
        </div>
        </div>
    )
}
