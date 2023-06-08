import { Routes, Route } from 'react-router-dom';

// import { FormAdd } from './FormAdd/FormAdd';
// import { ContactList } from './ContactList/ContactList';
// import { Search } from './Search/Search';
import { RegistrationPage } from 'pages/RegistrationPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<RegistrationPage />} />
        <Route path="contacts" element={<RegistrationPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};
