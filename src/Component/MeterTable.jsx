// MeterTable.jsx file
import React, { useState, forwardRef } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

export const MeterTable = forwardRef((props, ref) => {
  const defaultMaterialTheme = createTheme();

  const [tableData, setTableData] = useState([
    { zonename: 'Zone 1', kWh: '98890', MD_kW: '', kVAH: '142602', kVA_MD: '45.7', RkVAH: '', pf: '', anamoly: '' },
  ]);

  const columns = [
    { title: 'Zones', field: 'zonename' },
    { title: 'kWh', field: 'kWh' },
    { title: 'MD kW', field: 'MD_kW' },
    { title: 'kVAH', field: 'kVAH' },
    { title: 'kVA MD', field: 'kVA_MD' },
    { title: 'RkVAH', field: 'RkVAH' },
    { title: 'Pf', field: 'pf' },
    { title: 'Anamoly if any', field: 'anamoly' },
  ];

  const handleInputChange = (newData, oldData) => {
    const updatedData = [...tableData];
    updatedData[oldData.tableData.id] = newData;
    setTableData(updatedData);
    console.log(tableData);
  };

  // Function to get the current data
  const getCurrentData = () => {
    return tableData;
  };

  // Forward the ref to the parent component
  React.useImperativeHandle(ref, () => ({
    getCurrentData,
  }));

  return (
    <div className="Table1">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={tableData}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve) => {
                setTableData([...tableData, newRow]);
                resolve();
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve) => {
                handleInputChange(newRow, oldRow);
                resolve();
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve) => {
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData(updatedData);
                resolve();
              }),
          }}
          options={{ paging: false, actionsColumnIndex: -1 }}
        />
      </ThemeProvider>
    </div>
  );
});

