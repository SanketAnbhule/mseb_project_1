// MeterTable.jsx file
import React, { useState, forwardRef } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

export const Table = forwardRef((props, ref) => {
  const defaultMaterialTheme = createTheme();

  const [tableData2, setTableData] = useState([
    {eqname:"FAN",quantity:"9",capacity:"0.06",munit:"KW",totLoad:".54",loadKW:".54"},
  ]);

  const columns2 = [
    {title:"Equipment Name",field:"eqname"},
    {title:"Quantity",field:"quantity"},
    {title:"Capacity",field:"capacity"},
    {title:"Measurment Unit",field:"munit"},
    {title:"Total Load",field:"totLoad"},
    {title:"Load in KW",field:"loadKW"},
  ];

  const handleInputChange = (newData, oldData) => {
    const updatedData = [...tableData2];
    updatedData[oldData.tableData.id] = newData;
    setTableData(updatedData);
    console.log(tableData2);
  };

  // Function to get the current data
  const getCurrentData = () => {
    return tableData2;
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
          columns={columns2}
          data={tableData2}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve) => {
                setTableData([...tableData2, newRow]);
                resolve();
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve) => {
                handleInputChange(newRow, oldRow);
                resolve();
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve) => {
                const updatedData = [...tableData2];
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

