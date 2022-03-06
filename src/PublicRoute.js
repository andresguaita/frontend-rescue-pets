import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const PublicRoute = ({children}) => {

    const { checking ,id } = useSelector(state => state)

    if (checking) {
        return <h1>Espere...</h1>
      }

    return !id
        ? children
        : <Navigate to='/dashboard'/>
}