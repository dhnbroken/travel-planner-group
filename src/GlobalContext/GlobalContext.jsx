import React, { useState } from 'react';
import { getCurrentUser } from 'src/api/user-service';
import { getPlace } from 'src/api/plan-service';
import { ProjectContext } from './ProjectContext';

export const GlobalContextProvider = React.createContext(ProjectContext);
export const GlobalStoreContext = ({ children }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [placeSaved, setPlaceSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlaceSaved = async () => {
    try {
      const res = await getPlace();
      setPlaceSaved(res);
      setLoading(false);
    } catch (error) {}
  };

  const getUserInfomation = async () => {
    try {
      const userID = localStorage.getItem('userId');
      const res = await getCurrentUser(userID);
      setCurrentUser(res);
      setLoading(false);
    } catch (error) {}
  };

  const valueContext = {
    username,
    setUsername,
    password,
    setPassword,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    currentUser,
    placeSaved,
    setPlaceSaved,
    getPlaceSaved,
    getUserInfomation,
    loading,
    setLoading,
  };
  return <GlobalContextProvider.Provider value={valueContext}>{children}</GlobalContextProvider.Provider>;
};