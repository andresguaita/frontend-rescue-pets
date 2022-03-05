
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';




export const PrivateRoute = ({ children }) => {

    const { checking ,id, rol} = useSelector(state => state)

    if (checking) {
        return <h1>Espere...</h1>
      }
    
    return !rol
        ? children
        : <Navigate to="/login" />
}