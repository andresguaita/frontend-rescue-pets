import React from 'react'
import {SidebarData} from './SidebarData'
import '../Styles/Sidebar.css'
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../Redux/Actions'

export const Sidebar = () => {

    const navigate = useNavigate()
    const dispatch=  useDispatch()

    const handleLogout= () =>{
        dispatch(startLogout())
    }
  return (
    <div className='Sidebar'>
      <div className='Sidebar__title'>
      <h2>Panel de Administración</h2>
      </div>
      
     <hr/>
    <ul className='SidebarList'>
    {
        SidebarData.map((val, key)=>{
            return (
               
            <li key={key} onClick={()=> navigate(`${val.link}`)} className='row' >
                <div className='row--salir'> 
                <div id='icon'><i className={val.icon}></i></div><div id='title'><span className='title'>{val.title}</span></div>
                </div>
              </li>
                )
        })
    }
    <hr/>
    <li onClick={handleLogout} className='row'>
    <div className='row--salir'>
    <div id='icon'> <i className="fas fa-sign-out-alt fa-2x"></i></div><div id='title' ><span className='title'>Salir</span></div>
    </div>
    
   
    </li>
    </ul>
    </div>
  )
}
