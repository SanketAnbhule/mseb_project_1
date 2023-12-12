import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Home1.css";
import Navbarmecb from './Navbar_mecb';
//import {toast} from "react-toastify";
import axios from 'axios';



export default function Home1() {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);

    };

    useEffect(() => {
        loadData();
    }, []);

    const pdfgen = (e) => {
        axios.get("http://localhost:8000/generate-pdf");
    }
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
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

            <div style={{ display: 'flex', justifyContent: 'space-around', margin: 40 }}>
  <Link to="/data/3phase">
    <button style={{ margin: '0 10px' }}>3-phase</button>
  </Link>

  <Link to="/data/1phase">
    <button style={{ margin: '0 10px' }}>1-phase</button>
  </Link>

  <Link to="/data/HT">
    <button style={{ margin: '0 10px' }}>HT</button>
  </Link>



  <div style={{ display: 'flex', flex: 1, alignItems: 'center' }} className="search-container">
    <input
      type="text"
      style={{ width: '20%', marginRight: 10 }}
      placeholder="Enter Serial Number"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Link to={`/search/${searchTerm}`}>
      <button>Search</button>
    </Link>
  </div>
</div>




           
            <table className='styled-table'>
                <thead>
                    <tr>
                        {/* <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Name</th>
                <th style={{textAlign:"center"}}>Email</th>
                <th style={{textAlign:"center"}}>Contact</th>
                <th style={{textAlign:"center"}}>Action</th> */}

                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Serial Number</th>
                        <th style={{ textAlign: "center" }}>Form Type</th>
                        <th style={{ textAlign: "center" }}>Consumer Number</th>
                        <th style={{ textAlign: "center" }}>Consumer Name</th>
                        <th style={{ textAlign: "center" }}>Contact Number</th>
                        <th style={{ textAlign: "center" }}>Place</th>
                        <th style={{ textAlign: "center" }}>Date</th>
                        <th style={{ textAlign: "center" }}>Time</th>
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
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.SerialNumber}</td>
                                <td>{item.formType}</td>
                                <td>{item.consumerNumber}</td>
                                <td>{item.name}</td>
                                <td>{item.contactNumber}</td>
                                <td>{item.place}</td>
                                <td>{item.Date}</td>
                                <td>{item.Time}</td>
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
