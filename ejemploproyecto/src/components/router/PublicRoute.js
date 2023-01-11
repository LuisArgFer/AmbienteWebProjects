import { Navigate, Outlet } from 'react-router-dom';
import { HOME } from './paths/paths';
import { useAuthContext } from '../../context/authContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={HOME}/>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}