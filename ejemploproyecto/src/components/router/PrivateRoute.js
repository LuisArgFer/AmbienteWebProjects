import {Navigate, Outlet} from 'react-router-dom';
import { LOGIN } from './paths/paths'; 
import { useAuthContext } from '../../context/authContext';

export default function PrivateRoute() {
  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}