import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Home1.css";
import Navbarmecb from './Navbar_mecb';
//import {toast} from "react-toastify";
import { Typography, Card, Select, MenuItem, TextField, FormControl, Input } from "@mui/material";
import axios from 'axios';
import { Button } from '../styles/Button';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { useApi } from './ApiContext';
import "./NavbarHome.js";
const arrowUp = '\u2191';
const arrowDown = '\u2193';



export default function Home1() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const baseUrl = useApi();
  const [exportFormat, setExportFormat] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [timeRange, setTimeRange] = useState('');
  const [startDate, setStartDate] = useState(''); // Add state for start date
  const [endDate, setEndDate] = useState('');

  const loadData = async () => {
    const response = await axios.get(`${baseUrl}/api/get`);
    setData(response.data);
    setFilteredData(response.data);

  };

  useEffect(() => {
    loadData();
  }, [baseUrl]);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterCriteria(selectedFilter);

    // Filter the data based on the selected criteria
    const filteredResults = data.filter((item) => {
      return (
        (selectedFilter === '' || item.place === selectedFilter) ||
        (selectedFilter === '' || item.formType === selectedFilter) ||
        (selectedFilter === '' || item.inspect_serv === selectedFilter)
      );
    });

    setFilteredData(filteredResults);
  };
  const handleTimeRangeChange = (event) => {
    const selectedTimeRange = event.target.value;
    setTimeRange(selectedTimeRange);

    // Filter the data based on the selected time range
    const filteredResults = data.filter((item) => {
      const currentDate = new Date();
      const itemDate = new Date(item.Date);

      // Customize this logic based on your requirements
      switch (selectedTimeRange) {
        case 'daily':
          return itemDate.toDateString() === currentDate.toDateString();
        case 'weekly':
          const startOfWeek = new Date(currentDate);
          startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
          return itemDate >= startOfWeek;
        case 'monthly':
          return itemDate.getMonth() === currentDate.getMonth() &&
            itemDate.getFullYear() === currentDate.getFullYear();
        default:
          return true; // Show all data for other cases
      }
    });

    setFilteredData(filteredResults);
  };

  const handleDateFilter = () => {
    // Filter the data based on the selected date range
    const filteredResults = data.filter((item) => {
      const itemDate = new Date(item.Date);
      const startDateTime = startDate ? new Date(startDate) : null;
      const endDateTime = endDate ? new Date(endDate) : null;

      // Customize this logic based on your requirements
      if (startDateTime && endDateTime) {
        return itemDate >= startDateTime && itemDate <= endDateTime;
      } else {
        return true;
      }
    });

    setFilteredData(filteredResults);
  };

  const handleSearch = () => {
    // Filter the data based on the search term
    const searchResults = data.filter((item) => {
      // Check if any column contains the search term (both text and number)
      return Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredData(searchResults);
  };

  const handleReset = () => {
    // Reset filter criteria and search term
    setFilterCriteria('');
    setSearchTerm('');
    // Reset filtered data to original data
    setFilteredData(data);
  };
  const handleExportData = (format) => {
    if (format === "excel") {
      handleExportToExcel();
    } else if (format === "pdf") {
      handleExportToPDF();
    }
  };

  //   const handleExportToExcel = () => {
  //     const ws = XLSX.utils.json_to_sheet(filteredData);
  //     const wb = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //     XLSX.writeFile(wb, 'exported_data.xlsx');
  //   };

  //   const handleExportToPDF = () => {
  //     const pdf = new jsPDF();
  //     pdf.text('Exported Data', 20, 10);

  //     const columns = Object.keys(filteredData[0]);
  //     const rows = filteredData.map((row) => Object.values(row));

  //     pdf.autoTable({
  //       head: [columns],
  //       body: rows,
  //     });

  //     pdf.save('exported_data.pdf');
  //   };

  const handleExportToExcel = () => {
    const visibleColumns = ['SerialNumber', 'formType', 'consumerNumber', 'name', 'contactNumber', 'place', 'Date', 'Time']; // Add the columns you want to export
    const ws = XLSX.utils.json_to_sheet(
      filteredData.map((item) =>
        visibleColumns.reduce((acc, column) => {
          acc[column] = item[column];
          return acc;
        }, {})
      )
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'exported_data.xlsx');
  };

  const handleExportToPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Exported Data', 20, 10);

    const visibleColumns = ['SerialNumber', 'formType', 'consumerNumber', 'name', 'contactNumber', 'place', 'Date', 'Time']; // Add the columns you want to export
    const columns = visibleColumns.map((column) => column.toUpperCase());
    const rows = filteredData.map((item) =>
      visibleColumns.map((column) => item[column])
    );

    pdf.autoTable({
      head: [columns],
      body: rows,
    });

    pdf.save('exported_data.pdf');
  };
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const compareDates = (dateA, dateB) => {
    const timestampA = new Date(dateA).getTime();
    const timestampB = new Date(dateB).getTime();
    return timestampA - timestampB;
  };

  const sortedData = () => {
    if (sortConfig.key !== '') {
      return filteredData.sort((a, b) => {
        if (sortConfig.key === 'Date') {
          return sortConfig.direction === 'asc'
            ? compareDates(a[sortConfig.key], b[sortConfig.key])
            : compareDates(b[sortConfig.key], a[sortConfig.key]);
        } else {
          const keyA = a[sortConfig.key];
          const keyB = b[sortConfig.key];
          if (keyA < keyB) return sortConfig.direction === 'asc' ? -1 : 1;
          if (keyA > keyB) return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        }
      });
    }
    return filteredData;
  };
  const pdfgen = (e) => {
    axios.get("http://localhost:8000/generate-pdf");
  }
  const navigate = useNavigate();

  //   const handleSearch=(e)=>{
  //     e.preventDefault();
  //     axios.post("http://localhost:5000/api/search",{
  //         searchTerm
  //     })
  //     navigate(`/search?term=${searchTerm}`);
  //   }

  return (


    <div style={{ marginTop: "50px" }}>

      <h2 style={{ color: "black" }}>Consumer Information</h2>


      <FormControl>
        <Select
          value={filterCriteria}
          onChange={handleFilterChange}
          displayEmpty
          input={<Input />}
        >
          <MenuItem value="" disabled>
            All (Form Type)
          </MenuItem>
          <MenuItem value="3phase">3 Phase</MenuItem>
          <MenuItem value="1phase">1 Phase</MenuItem>
          <MenuItem value="HT">HT</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Select
          value={filterCriteria}
          onChange={handleFilterChange}
          displayEmpty
          input={<Input />}
        >
          <MenuItem value="" disabled>
            All (Form Category)
          </MenuItem>
          <MenuItem value="u/s 135">U/s 135</MenuItem>
          <MenuItem value="u/s 126">U/s 126</MenuItem>
          <MenuItem value="nil">Nil</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="u/o case">U/O Case</MenuItem>
        </Select>
      </FormControl>

      <input
        type="text"
        style={{ width: "15%", marginInline: 30 }}
        placeholder="Search by text or number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch} style={{ width: "10%" }}>Search</Button>
      <Button onClick={handleReset} style={{ width: "10%", marginInline: 30 }}>Reset</Button>
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
          value={timeRange}
          onChange={handleTimeRangeChange}
          displayEmpty
          input={<Input />}
        >
          <MenuItem value="" disabled>
            Time Range
          </MenuItem>
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button onClick={handleDateFilter}>Filter by Date</button>









      <table className='styled-table'>
        <thead>
          <tr>


            <th style={{ textAlign: "center" }}>No.</th>
            <SortableHeader
              label="Serial Number"
              field="SerialNumber"
              onSort={handleSort}
              sortConfig={sortConfig}
            />
            <th style={{ textAlign: "center" }}>Form Type</th>
            <th style={{ textAlign: "center" }}>Form Category</th>
            <SortableHeader
              label="Consumer Number"
              field="consumerNumber"
              onSort={handleSort}
              sortConfig={sortConfig}
            />
            <SortableHeader
              label="Consumer Name"
              field="name"
              onSort={handleSort}
              sortConfig={sortConfig}
            />
            <th style={{ textAlign: "center" }}>Contact Number</th>
            <SortableHeader
              label="Place"
              field="place"
              onSort={handleSort}
              sortConfig={sortConfig}
            />
            <SortableHeader
              label="Date"
              field="Date"
              onSort={handleSort}
              sortConfig={sortConfig}
            />

            <th style={{ textAlign: "center" }}>Action</th>
            {/* <th style={{textAlign:"center"}}>owner_name</th>
                <th style={{textAlign:"center"}}>mob_num_owner</th>
                <th style={{textAlign:"center"}}>mob_num_user</th>
                <th style={{textAlign:"center"}}>category</th>
                <th style={{textAlign:"center"}}>installation_type</th>
                <th style={{textAlign:"center"}}>tariff_app</th>
                <th style={{textAlign:"center"}}>san_load</th>
                <th style={{textAlign:"center"}}>conn_load</th>
                <th style={{textAlign:"center"}}>normal_working_hrs</th>
                <th style={{textAlign:"center"}}>name_of_billing</th>
                <th style={{textAlign:"center"}}>arrears_date</th>
                <th style={{textAlign:"center"}}>billing</th>
                <th style={{textAlign:"center"}}>meter_number</th>
                <th style={{textAlign:"center"}}>differ_tariff</th>
                <th style={{textAlign:"center"}}>exceed_tariff</th>
                <th style={{textAlign:"center"}}>abnormal_reading</th>
                <th style={{textAlign:"center"}}>billing_abnor_stat</th> */}
          </tr>
        </thead>
        <tbody>
          {sortedData().map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope='row'>{index + 1}</th>
                <td>{item.SerialNumber}</td>
                <td>{item.formType}</td>
                <td>{item.inspect_serv}</td>
                <td>{item.consumerNumber}</td>
                <td>{item.name}</td>
                <td>{item.contactNumber}</td>
                <td>{item.place}</td>
                <td>{new Date(item.Date).toLocaleDateString()}</td>


                {/* <td>{item.owner_name}</td>
                         <td>{item.mob_num_owner}</td>
                         <td>{item.mob_num_user}</td>
                         <td>{item.category}</td>
                         <td>{item.installation_type}</td>
                         <td>{item.tariff_app}</td>
                         <td>{item.san_load}</td>
                         <td>{item.conn_load}</td>
                         <td>{item.normal_working_hrs}</td>
                         <td>{item.name_of_billing}</td>

                         <td>{item.arrears_date}</td>
                         <td>{item.billing}</td>
                         <td>{item.meter_number}</td>
                         <td>{item.differ_tariff}</td>
                         <td>{item.exceed_tariff}</td>
                         <td>{item.abnormal_reading}</td>
                         <td>{item.billing_abnor_stat}</td> */}

                <td>
                  {/* <Link to={`/update/${item.id}`}>
                                <button className='btn btn-edit'>Edit</button>
                            </Link>
                            <button className='btn btn-delete'>Delete</button> */}
                  <Link to={`/view/${item.id}`}>
                    <button className='btn btn-view'>View</button>
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <button className='btn btn-view'>Update</button>
                  </Link>

                  <Link to={"http://localhost:8000/generate-pdf"}>
                    <button  >PDF</button></Link>


                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const SortableHeader = ({ label, field, onSort, sortConfig }) => {
  const handleClick = () => {
    onSort(field);
  };

  return (
    <th style={{ textAlign: "center" }} onClick={handleClick}>
      {label}
      {sortConfig.key === field && (
        <span>{sortConfig.direction === 'asc' ? arrowUp : arrowDown}</span>
      )}
    </th>
  );
};