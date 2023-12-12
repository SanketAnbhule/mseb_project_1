
import React, { useState, forwardRef } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

export const CurrentVoltTable = forwardRef((props, ref) => {
  const defaultMaterialTheme = createTheme();

  const [tableData1, setTable1Data] = useState([
    {  CVmeasure: "Zone 1",rPhase: "58",yPhase: "54",bPhase:"66" },
  ]);

  const columns1 = [
    {title:"Current and Volt measurement",field:"CVmeasure"},
    {title:"R phase",field:"rPhase"},
    {title:"Y phase",field:"yPhase"},
    {title:"B Phase",field:"bPhase"},
  ];

  const handleInputChange = (newData, oldData) => {
    const updatedData = [...tableData1];
    updatedData[oldData.tableData.id] = newData;
    setTable1Data(updatedData);
    console.log(tableData1);
  };

  // Function to get the current data
  const getCurrentData = () => {
    return tableData1;
  };

  // Forward the ref to the parent component
  React.useImperativeHandle(ref, () => ({
    getCurrentData,
  }));

  return (
    <div className="Table2">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns1}
          data={tableData1}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve) => {
                setTable1Data([...tableData1, newRow]);
                resolve();
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve) => {
                handleInputChange(newRow, oldRow);
                resolve();
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve) => {
                const updatedData = [...tableData1];
                updatedData.splice(selectedRow.tableData1.id, 1);
                setTable1Data(updatedData);
                resolve();
              }),
          }}
          options={{ paging: false, actionsColumnIndex: -1 }}
        />
      </ThemeProvider>
    </div>
  );
});

