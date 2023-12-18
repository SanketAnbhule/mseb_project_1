// ApiContext.js
import { createContext, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const baseUrl = 'http://localhost:5000'; // Replace with your actual base URL

  return <ApiContext.Provider value={baseUrl}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
