import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardAdmin = () => {
  return (
    <div style={{marginTop: 100}}>
        <h1>Aqui va el dashboard del admin</h1>
        <Link to="DashboardPetAdmin"><button>Go-to-PetAdmin</button></Link>
        <Link to="help"><button>Help Tickets</button></Link>
    </div>
  )
}
