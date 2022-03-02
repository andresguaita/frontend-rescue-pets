
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';




export const PrivateRoute = ({ children }) => {

    const { checking ,id } = useSelector(state => state)

    if (checking) {
        return <h1>Espere...</h1>
      }
    
    return !!id
        ? children
        : <Navigate to="/login" />
}