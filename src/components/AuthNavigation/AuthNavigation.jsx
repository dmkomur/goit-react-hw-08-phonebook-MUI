import { Link } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Regitrate</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
};
