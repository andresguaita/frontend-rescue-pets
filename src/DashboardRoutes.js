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
import FollowUpTransit from './components/FollowUpTransit';
import TechSupport from './components/TechSupport';
import DashboardAlert from './components/DashboardAlert';


export const DashboardRoutes = () => {
    return (
        <div>
   
        <div>
            <NavbarDashboard/>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route exact path="dashboard/forms" element={<DashboardForms/>}/>
                <Route path="dashboard/pets" element={<PetsInDashboard/>} />
                <Route path="/dashboard/pets/FollowUp" element={<FollowUp/>} />
                <Route path="/dashboard/pets/FollowUpTransit" element={<FollowUpTransit/>} />
                <Route path="dashboard/forms/views" element={<AnswerFormView/>}/>
                <Route path="dashboard/profile" element={<ShelterProfile/>}/>
                <Route path="dashboard/help" element={<TechSupport/>}/>
                <Route path="dashboard/config" element={<ChangePassword/>}/>
                <Route path="dashboard/forms/view/:adoYreqid/:formtypeid/:petId/:formId" element={<AnswerFormView/>}/>
                <Route path="dashboard/createForm" element={<DashboardCreateForm/>}/>
                <Route path="dashboard/Alert" element={<DashboardAlert/>}/>
            </Routes>
        </div>
        </div>
    )
}
