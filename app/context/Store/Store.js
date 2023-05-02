'use client';

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  userId: '',
  setUserId: () => '',
  data: [],
  setData: () => []
});

export const GlobalContextProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);

  return (
    <GlobalContext.Provider value={{ userId, setUserId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);