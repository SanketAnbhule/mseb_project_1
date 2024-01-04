import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Home1.css";
import { useApi } from './ApiContext';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import {  Button } from 'react-bootstrap';
import { Typography, Card, Select, MenuItem, TextField, FormControl, Input } from "@mui/material";


const DailyReport = () => {
  const baseUrl = useApi();
  const [data, setData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [exportFormat, setExportFormat] = useState('');
  const [filterInterval, setFilterInterval] = useState('daily');

  const loadData = async () => {
    const response = await axios.get(`${baseUrl}/api/get`);
    setData(response.data);
    calculateReportData(response.data);
  };

  useEffect(() => {
    loadData();
  }, [baseUrl, filterInterval]);

  const calculateReportData = (data) => {
    const currentDate = new Date();
    let filteredData;

    if (filterInterval === 'daily') {
      filteredData = data.filter(item => isSameDay(new Date(item.Date), currentDate));
    } else if (filterInterval === 'weekly') {
      const lastWeekDate = new Date();
      lastWeekDate.setDate(lastWeekDate.getDate() - 7);
      filteredData = data.filter(item => new Date(item.Date) >= lastWeekDate);
    } else if (filterInterval === 'monthly') {
      const lastMonthDate = new Date();
      lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
      filteredData = data.filter(item => new Date(item.Date) >= lastMonthDate);
    }

    const fsCounts = {
      Ahmednagar: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      KalyanI: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      KalyanII: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Nashik: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Malegaon: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      VasaiFs: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Pen: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Thane: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Vashi: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Ratnagiri: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Sindhudurg: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Jalgaon: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Dhule: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Nandurbar: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      Virar: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      VasaiDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      PalgharDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      PanvelUDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      JalgaonDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      WagleEstateDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      KalyanEDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 },
      KalyanRDn: { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 }

    };

    filteredData.forEach((item) => {
      const cityName = item.place; // Replace with the actual field containing the city name
      const fsCategory = item.inspect_serv; // Replace with the actual field containing the inspection service
      console.log(cityName);
      console.log(fsCategory);
      if (fsCounts[cityName] && fsCounts[cityName][fsCategory] !== undefined) {
        fsCounts[cityName][fsCategory]++;
      }
    });

    const totals = { LT: 0, HT: 0, 'u/s 135': 0, 'u/s 126': 0, 'other': 0, 'u/o case': 0, 'nil': 0, 'FIR lodged': 0 };
    Object.keys(fsCounts).forEach((city) => {
      Object.keys(fsCounts[city]).forEach((category) => {
        totals[category] += fsCounts[city][category];
      });
    });

    setReportData({ ...fsCounts, Total: totals });

    //setReportData(fsCounts);
  };
  const handleExportData = (format) => {
    if (format === 'excel') {
      exportToExcel();
    } else if (format === 'pdf') {
      exportToPDF();
    }
  };

  const exportToExcel = () => {
    const dataForExcel = Object.keys(reportData).map((place) => ({
      City: place,
      ...reportData[place],
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'FS_Report');
  
    // You can customize the filename as needed
    XLSX.writeFile(workbook, 'FS_Report.xlsx');
  };

  const exportToPDF = () => {
    const pdf = new jsPDF();
    let yOffset = 10;

    pdf.text('FS Daily Performance Report', 20, yOffset);
    yOffset += 10;

    Object.keys(reportData).forEach((city, index) => {
      pdf.text(`${index + 1}. ${city}`, 20, yOffset);
      pdf.text(`LT: ${reportData[city].LT}, HT: ${reportData[city].HT}, 135: ${reportData[city]['u/s 135']}, 126: ${reportData[city]['u/s 126']}, Other: ${reportData[city].other}, U/O Case: ${reportData[city]['u/o case']}, Nil: ${reportData[city].nil}, FIR Lodged: ${reportData[city]['FIR lodged']}`, 20, yOffset + 10);
      yOffset += 20;
    });

    pdf.save("fs_performance_report.pdf");
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };


  return (
    <div>
      <h1>FS Daily Performance Report</h1>
      <FormControl>
        <Select
          value={exportFormat}
          onChange={(e) => {
            setExportFormat(e.target.value);
            handleExportData(e.target.value);
          }}
          displayEmpty
          input={<Input />}
        >
          <MenuItem value="" disabled>
            Export Data
          </MenuItem>
          <MenuItem value="excel">Export to Excel</MenuItem>
          <MenuItem value="pdf">Export to PDF</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Select
          value={filterInterval}
          onChange={(e) => setFilterInterval(e.target.value)}
          displayEmpty
          input={<Input />}
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </Select>
      </FormControl>

      {/* <Button variant="primary" onClick={() => handleExportData(exportFormat)} disabled={!exportFormat}>
        Export as {exportFormat === 'excel' ? 'Excel' : 'PDF'}
      </Button> */}

      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Name of FS</th>
            <th style={{ textAlign: "center" }}>LT</th>
            <th style={{ textAlign: "center" }}>HT</th>
            <th style={{ textAlign: "center" }}>135</th>
            <th style={{ textAlign: "center" }}>126</th>
            <th style={{ textAlign: "center" }}>Other</th>
            <th style={{ textAlign: "center" }}>U/O</th>
            <th style={{ textAlign: "center" }}>Nil</th>
            <th style={{ textAlign: "center" }}>FIR lodged</th>
            <th style={{ textAlign: "center" }}>Remark</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(reportData).map((city, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{city}</td>
              <td>{reportData[city].LT}</td>
              <td>{reportData[city].HT}</td>
              <td>{reportData[city]['u/s 135']}</td>
              <td>{reportData[city]['u/s 126']}</td>
              <td>{reportData[city]['other']}</td>
              <td>{reportData[city]['u/o case']}</td>
              <td>{reportData[city]['nil']}</td>
              <td>{reportData[city]['FIR lodged']}</td>
              <td>{/* Add logic for Remark column if needed */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyReport;
