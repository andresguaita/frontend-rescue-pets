import React from 'react'
import { Routes, Route} from "react-router-dom";
import { AnswerFormView } from './components/AnswerFormView';
import { ChangePassword } from './components/ChangePassword';
import { Dashboard } from './components/Dashboard';
import { DashboardCreateForm } from './components/DashboardCreateForm';
import { DashboardForms } from './components/DashboardForms';
import PetsInDashboard from './components/PetsInDashboard'
import { ShelterProfile } from './components/ShelterProfile';
import FollowUp from './components/FollowUp';
import { DashboardAdmin } from './components/DashboardAdmin';
import { CreateAdmin } from './components/CreateAdmin';
import { DashboardPetAdmin } from './components/DashboardPetAdmin';
import { DashboardShelterAdmin } from './components/DashboardShelterAdmin';
import NavbarDashboardAdmin from './components/NavbarDashboardAdmin';
import DashboardAdminHelp from './components/DashboardAdminHelp';
import { DashboardPetEditAdmin } from './components/DashboardPetEditAdmin';
import { Sidebar } from './components/Sidebar';




export const DashboardRoutesAdmin = () => {
    return (

        <div className='admin'>
        <Sidebar/>
        <div className='container__admin'>
       
            <Routes>
                <Route path="dashboard" element={<DashboardAdmin />} />
                <Route path="dashboard/createadmin" element={<CreateAdmin />} />
                <Route path="dashboard/DashboardPetAdmin" element={<DashboardPetAdmin/>} /> 
                <Route path="dashboard/DashboardShelterAdmin" element={<DashboardShelterAdmin/>} /> 
                <Route path="dashboard/help" element={<DashboardAdminHelp/>} /> 
            </Routes>
        </div>
        </div>
       
    )
}
