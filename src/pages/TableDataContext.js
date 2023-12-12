import React, { createContext, useContext, useState } from 'react';

const TableDataContext = createContext();

export const TableDataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([
    { zonename: 'Zone 1', kWh: '98890', MD_kW: '', kVAH: '142602', kVA_MD: '45.7', RkVAH: '', pf: '', anamoly: '' },
  ]);

  return (
    <TableDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </TableDataContext.Provider>
  );
};

export const useTableData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error('useTableData must be used within a TableDataProvider');
  }
  return context;
};
