import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Home1.css";
export default function Search() {

    const[data,setData]=useState([]);
   
    const loadData=async()=>{
        const response=await axios.get("http://localhost:5000/api/get/Ht");
        setData(response.data);

    };

    useEffect(()=>{
        loadData();
    },[]);
  return (
    <div style={{marginTop:20}}>
     <h2 style={{ color: "black" }}>Consumer Information</h2>    
      <table className='styled-table'>
         <thead>
            <tr>
                {/* <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Name</th>
                <th style={{textAlign:"center"}}>Email</th>
                <th style={{textAlign:"center"}}>Contact</th>
                <th style={{textAlign:"center"}}>Action</th> */}

                <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Serial Number</th>
                <th style={{textAlign:"center"}}>Form Type</th>
                <th style={{textAlign:"center"}}>Consumer Number</th>
                <th style={{textAlign:"center"}}>Consumer Name</th>
                <th style={{textAlign:"center"}}>Contact Number</th>
                <th style={{textAlign:"center"}}>Place</th>
                <th style={{textAlign:"center"}}>Date</th>
                <th style={{textAlign:"center"}}>Time</th>
                <th style={{textAlign:"center"}}>Action</th>
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
            {data.map((item,index)=>{
                return(
                    <tr key={item.id}>
                         <th scope='row'>{index+1}</th>
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
