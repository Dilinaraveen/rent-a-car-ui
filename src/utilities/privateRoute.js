import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
