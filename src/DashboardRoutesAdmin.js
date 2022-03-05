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
import { CreateAdmin } from './components/CreateAdmin';
import { DashboardPetAdmin } from './components/DashboardPetAdmin';
import DashboardAdminHelp from './components/DashboardAdminHelp';


export const DashboardRoutesAdmin = () => {
    return (
        <div>
   
        <div className='container'>
        <NavbarDashboard/>
            <Routes>
                <Route path="dashboard" element={<DashboardAdmin />} />
                <Route path="dashboard/createadmin" element={<CreateAdmin />} />
                <Route path="dashboard/DashboardPetAdmin" element={<DashboardPetAdmin/>} /> 
                <Route path="dashboard/help" element={<DashboardAdminHelp/>} /> 
           
            </Routes>
        </div>
        </div>
    )
}
