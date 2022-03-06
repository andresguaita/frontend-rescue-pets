import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const PublicRoute = ({children}) => {

    const { checking ,id, rol } = useSelector(state => state)
    let route= ''

    if(rol==3) route ='/admin/dashboard'
    if(rol!=3) route ='/dashboard'
    if(rol==2) route ='/admin/dashboard'
    

    if (checking) {
        return <h1>Espere...</h1>
      }

    return !id
        ? children
        : <Navigate to={`${route}`}/>
}