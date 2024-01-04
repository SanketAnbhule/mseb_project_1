import React, {useState,useEffect,useRef} from 'react';
import {useNavigate, useParams,Link} from "react-router-dom";
import axios from 'axios';
import {toast} from "react-toastify";
//import { Typography, Card, CardContent, Grid, TextField,Select,MenuItem, Button, InputLabel, FormControl } from "@mui/material";

// import { makeStyles } from '@mui/material';
import { Typography, Card, CardContent, Grid, Select,MenuItem,TextField,FormControl,InputLabel} from "@mui/material";
// import "./App.css";
import { Table } from "../Component/Table";
import { Modal } from "../Component/Modal";
import { MeterTable } from "../Component/MeterTable";
import { MeterModal } from "../Component/MeterModal";
import { CurrentVoltTable } from "../Component/CurrentVoltTable";
import { CurrentVoltModal } from "../Component/CurrentVoltModal";
import { Button } from '../styles/Button';
import { useApi } from './ApiContext';

import { GlobalStyle } from '../Component/GlobalStyle';
import Other from '../Component/Other';
import Inspection from '../Component/Inspection';





// first
// const initialState={
//     name:"",
//     email:"",
//     contact:""
// };
//---------------------------------------------------------------------------------------
//update 2 14/9/23 Second
const initialState={

     serialNumber  :"",
    
  flyingSquadUnit  :"",
  formType:"",
  theftDetectedBy  :"",
  place  :"",
  consumerNumber  :"",
  buNumber  :"",
  name  :"",
  address  :"",
  nameOfOwner  :"",
  contactNumber  :"",
  category  :"",
  typeOfInstallation  :"",
  tariffDetails  :"",
  sanctionedLoad  :"",
  connectedLoad  :"",
  normalWorkingHours  :"",
  nameOfBillingOffice  :"",
  meterSerialNumber  :"",
  make  :"",
  capacity  :"",
  externalCtRatio  :"",
  labNo  :"",
  type  :"",
  revImpKwh  :"",
  meterCTRatio  :"",
  meterMake  :"",
  scaleFactor  :"",
  overallMFForUnit  :"",
  freq  :"",
  whetherMeterDataReadThroughMriLaptop  :"",
  whetherDataCollectedSuccessfully  :"",
  ifNoSpecifyReason  :"",
  onMeterBox  :"",
  onMeterBody  :"",
  onMeterTerminalCover  :"",
  onOpticalPort  :"",
  ctBoxIfAny  :"",
  other  :"",
  capacitorInstalled  :"",
  adequateOrNot  :"",
  meterInstalledAt  :"",
  meterInstalledAtEyesight  :"",
  otherObservations  :"",
  whetherMeterServiceKeptUnderObservation  :"",
  cap_adequate  :"",
  irregularitiesObserved  :"",
  under_obser  :"",
  remed_action  :"",
  instruct_consum  :"",
  instruct_bill :"",
  meter_ht:"",
  whether_meter_cub:"",
  meter_pt:"",
  external_pt:"",
  mf_as:"",
  date:""

};


  
//-----------------------------------------------------------------------------------------


export default function AddEdit() {
    // Select Values
const [meterin, setMeterIn] = useState('');
const baseUrl = useApi();

const handleChangeYN = (event) => {
  setMeterIn(event.target.value);
};

const [externalct, setExternalct] = useState('');

const handleChangeYN1 = (event) => {
  setExternalct(event.target.value);
};


const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);})
   
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
  
  


 
  
  
    const [state,setState]=useState(initialState);
    // //const {name,email,contact}=state;
      const {serialNumber,flyingSquadUnit,formType,theftDetectedBy,place,consumerNumber,
      buNumber,name,address,nameOfOwner,contactNumber,category,typeOfInstallation,
      tariffDetails,sanctionedLoad,connectedLoad,normalWorkingHours,nameOfBillingOffice,
      meterSerialNumber,make,capacity,externalCtRatio,labNo,type,revImpKwh,meterCTRatio,
      meterMake,scaleFactor,overallMFForUnit,freq,whetherMeterDataReadThroughMriLaptop,
      whetherDataCollectedSuccessfully,ifNoSpecifyReason,onMeterBox,onMeterBody,
      onMeterTerminalCover,onOpticalPort,ctBoxIfAny,other,capacitorInstalled,adequateOrNot,
      meterInstalledAt,meterInstalledAtEyesight,otherObservations,
      whetherMeterServiceKeptUnderObservation,cap_adequate,irregularitiesObserved,
    under_obser,remed_action,instruct_consum,instruct_bill,meter_ht,whether_meter_cub,meter_pt,external_pt,mf_as,date}=state;
    const navigate=useNavigate();
    const meterTableRef = useRef();
    const currentVoltTableRef=useRef();
    const tableRef=useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleChange = (event) => {
      setSelectedFiles(event.target.files);
    };

    const [inspect, setInspect] = useState('');
    const [showTextField, setShowTextField] = useState(false);
 const handleChangeInspect = (event) => {
        const selectedValue = event.target.value;
    setInspect(event.target.value);
    setShowTextField(selectedValue === 'u/o case');

    };
  
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  
  //     const formData = new FormData();
  //     for (const file of selectedFiles) {
  //       formData.append('images', file);
  //     }
  
  
  //     try {
  //       await axios.post(`${baseUrl}/api/upload`, formData);
  //       console.log('Images uploaded successfully!');
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setSelectedFiles([]);
  //     }
  //   };

  //   const [selectedFile, setSelectedFile] = useState(null);

  // const handleChangevd = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const uploadVideo = async () => {
  //   if (!selectedFile) return;

  //   const formData2 = new FormData();
  //   formData2.append('video', selectedFile);

  //   try {
  //     await fetch(`${baseUrl}/api/upload`, {
  //       method: 'POST',
  //       body: formData2,
  //     });
  //     setSelectedFile(null); // Clear selected file state
  //     alert('Video uploaded successfully!');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  
  
  // Call the postData function when needed
   const handleSub=(e)=>{  
    e.preventDefault();
    const tableData = meterTableRef.current.getCurrentData();
    const tableData1 = currentVoltTableRef.current.getCurrentData();
    const tableData2 = tableRef.current.getCurrentData();

// Map the data to the desired format
const dataS = tableData.map((row) => ({
  zonename: row.zonename,
  kWh: row.kWh,
  MD_kW: row.MD_kW,
  kVAH: row.kVAH,
  kVA_MD: row.kVA_MD,
  RkVAH: row.RkVAH,
  pf: row.pf,
  anamoly: row.anamoly,
}));
const dataSString = JSON.stringify(dataS);
    
     
    // const dataS=MeterTable.tableData;
    // console.log(dataS.data);
    const dataP=tableData1.map((row)=>({
      CVmeasure:row.CVmeasure,    
      rPhase:row.rPhase,    
      yPhase:row.yPhase,
      bPhase:row.bPhase,
    }))
    const dataPString = JSON.stringify(dataP);
    const dataQ=tableData2.map((row)=>({
      eqname:row.eqname,  
      quantity:row.quantity,
      capacity:row.capacity,
      munit:row.munit,
      totLoad:row.totLoad,
      loadKW:row.loadKW,
    }))
    const dataQString = JSON.stringify(dataQ);
    const meterInstalled=meterin;
    // const Date=formattedDate;
    // const Time=formattedTime;
    
      const url = `${baseUrl}/api/post`; // Replace with your actual backend API URL
      const formData = new FormData();
    
      // Add text data to FormData
      formData.append('serialNumber', serialNumber);
      formData.append('formType', formType);
      formData.append('flyingSquadUnit', flyingSquadUnit);
      formData.append('theftDetectedBy', theftDetectedBy);
      formData.append('place', place);
      formData.append('consumerNumber', consumerNumber);
      formData.append('buNumber', buNumber);
      formData.append('name', name);
      formData.append('address', address);
      formData.append('nameOfOwner', nameOfOwner);
      formData.append('contactNumber', contactNumber);
      formData.append('category', category);
      formData.append('typeOfInstallation', typeOfInstallation);
      formData.append('tariffDetails', tariffDetails);
      formData.append('sanctionedLoad', sanctionedLoad);
      formData.append('connectedLoad', connectedLoad);
      formData.append('normalWorkingHours', normalWorkingHours);
      formData.append('nameOfBillingOffice', nameOfBillingOffice);
      formData.append('meterInstalled', meterInstalled);
      formData.append('meterSerialNumber', meterSerialNumber);
      formData.append('make', make);
      formData.append('capacity', capacity);
      formData.append('externalCtRatio', externalCtRatio);
      formData.append('labNo', labNo);
      formData.append('type', type);
      formData.append('revImpKwh', revImpKwh);
      formData.append('meterCTRatio', meterCTRatio);
      formData.append('meterMake', meterMake);
      formData.append('scaleFactor', scaleFactor);
      formData.append('overallMFForUnit', overallMFForUnit);
      formData.append('freq', freq);
      formData.append('whetherMeterDataReadThroughMriLaptop', whetherMeterDataReadThroughMriLaptop);
      formData.append('whetherDataCollectedSuccessfully', whetherDataCollectedSuccessfully);
      formData.append('ifNoSpecifyReason', ifNoSpecifyReason);
      formData.append('onMeterBox', onMeterBox);
      formData.append('onMeterBody', onMeterBody);
      formData.append('onOpticalPort', onOpticalPort);
      formData.append('ctBoxIfAny', ctBoxIfAny);
      formData.append('other', other);
      formData.append('capacitorInstalled', capacitorInstalled);
      formData.append('adequateOrNot', adequateOrNot);

      formData.append('meterInstalledAt', meterInstalledAt);
      formData.append('meterInstalledAtEyesight', meterInstalledAtEyesight);
      formData.append('otherObservations', otherObservations);
       formData.append('whetherMeterServiceKeptUnderObservation', whetherMeterServiceKeptUnderObservation);
       formData.append('cap_adequate', cap_adequate);
       formData.append('irregularitiesObserved', irregularitiesObserved);
       formData.append('inspect', inspect);
       formData.append('under_obser', under_obser);
       formData.append('remed_action', remed_action);
       formData.append('instruct_consum', instruct_consum);
       formData.append('instruct_bill', instruct_bill);
       formData.append('meter_ht', meter_ht);
       formData.append('whether_meter_cub', whether_meter_cub);
       formData.append('meter_pt', meter_pt);
       formData.append('external_pt', external_pt);
       formData.append('mf_as', mf_as);
       formData.append('dataS', dataSString);
       formData.append('dataP', dataPString);
       formData.append('dataQ', dataQString);
       

      // Add other text fields as needed
    
      // Add image files to FormData
      const imageFileInput = document.getElementById('imageInput'); // Replace with your actual input element
      for (const file of imageFileInput.files) {
        formData.append('images', file);
      }

      const signatureFileInput = document.getElementById('signatureInput'); // Replace with your actual input element
      for (const file of signatureFileInput.files) {
        formData.append('signature', file);
      }
    
      // Add video file to FormData
      const videoFileInput = document.getElementById('videoInput'); // Replace with your actual input element
      formData.append('video', videoFileInput.files[0]);
    
      try {
        const response = fetch(url, {
          method: 'POST',
          body: formData,
        });
    
        if (response.ok) {
          const result =response.json();
          console.log(result);
        } else {
          console.error('Failed to send data to the server');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
   
  
    const handleSubmit11=(e)=>{
        e.preventDefault();
        
        
        
        const tableData = meterTableRef.current.getCurrentData();
        const tableData1 = currentVoltTableRef.current.getCurrentData();
        const tableData2 = tableRef.current.getCurrentData();

    // Map the data to the desired format
    const dataS = tableData.map((row) => ({
      zonename: row.zonename,
      kWh: row.kWh,
      MD_kW: row.MD_kW,
      kVAH: row.kVAH,
      kVA_MD: row.kVA_MD,
      RkVAH: row.RkVAH,
      pf: row.pf,
      anamoly: row.anamoly,
    }));
        
         
        // const dataS=MeterTable.tableData;
        // console.log(dataS.data);
        const dataP=tableData1.map((row)=>({
          CVmeasure:row.CVmeasure,    
          rPhase:row.rPhase,    
          yPhase:row.yPhase,
          bPhase:row.bPhase,
        }))
        const dataQ=tableData2.map((row)=>({
          eqname:row.eqname,  
          quantity:row.quantity,
          capacity:row.capacity,
          munit:row.munit,
          totLoad:row.totLoad,
          loadKW:row.loadKW,
        }))

        const meterInstalled=meterin;
        const Date=formattedDate;
        const Time=formattedTime;
        // if(!consumer_number || !consumer_name || !address || !owner_name ||
        //     !mob_num_owner || !mob_num_user || !category || !installation_type
        //     || !tariff_app || !san_load || !conn_load || !normal_working_hrs || !name_of_billing
        //     || !arrears_date || !billing || !meter_number || !differ_tariff || !exceed_tariff
        //     || !abnormal_reading || !billing_abnor_stat){
        //     toast.error("Please provide input fields");
        // } 
            axios
            .post(`${baseUrl}/api/post`,{
               serialNumber,meterInstalled,dataS,dataP,dataQ,formType,
               flyingSquadUnit,theftDetectedBy,place,consumerNumber,
              buNumber,name,address,nameOfOwner,contactNumber,category,typeOfInstallation,
              tariffDetails,sanctionedLoad,connectedLoad,normalWorkingHours,nameOfBillingOffice,
              meterSerialNumber,make,capacity,externalCtRatio,labNo,type,revImpKwh,meterCTRatio,
              meterMake,scaleFactor,overallMFForUnit,freq,whetherMeterDataReadThroughMriLaptop,
              whetherDataCollectedSuccessfully,ifNoSpecifyReason,onMeterBox,onMeterBody,
              onMeterTerminalCover,onOpticalPort,ctBoxIfAny,other,capacitorInstalled,
              adequateOrNot,meterInstalledAt,meterInstalledAtEyesight,otherObservations,
              whetherMeterServiceKeptUnderObservation,cap_adequate,irregularitiesObserved,
      inspect,under_obser,remed_action,instruct_consum,instruct_bill,date,Time,meter_ht,whether_meter_cub,meter_pt,external_pt,mf_as})
              
                // name,
                // email,
                // contact,
              
    
            
           .then(()=>{
                    setState({serialNumber  :"",
                flyingSquadUnit  :"",
                formType:"",
                theftDetectedBy  :"",
                place  :"",
                consumerNumber  :"",
                buNumber  :"",
                name  :"",
                address  :"",
                nameOfOwner  :"",
                contactNumber  :"",
                category  :"",
                typeOfInstallation  :"",
                tariffDetails  :"",
                sanctionedLoad  :"",
                connectedLoad  :"",
                normalWorkingHours  :"",
                nameOfBillingOffice  :"",
                meterSerialNumber  :"",
                make  :"",
                capacity  :"",
                externalCtRatio  :"",
                labNo  :"",
                type  :"",
                revImpKwh  :"",
                meterCTRatio  :"",
                meterMake  :"",
                scaleFactor  :"",
                overallMFForUnit  :"",
                freq  :"",
                whetherMeterDataReadThroughMriLaptop  :"",
                whetherDataCollectedSuccessfully  :"",
                ifNoSpecifyReason  :"",
                onMeterBox  :"",
                onMeterBody  :"",
                onMeterTerminalCover  :"",
                onOpticalPort  :"",
                ctBoxIfAny  :"",
                other  :"",
                capacitorInstalled  :"",
                adequateOrNot  :"",
                meterInstalledAt  :"",
                meterInstalledAtEyesight  :"",
                otherObservations  :"",
                whetherMeterServiceKeptUnderObservation  :"",
                cap_adequate  :"",
                irregularitiesObserved  :"",
                
                under_obser  :"",
                remed_action  :"",
                instruct_consum  :"",
                instruct_bill :"",
                meter_ht:"",
                whether_meter_cub:"",
                meter_pt:"",
                external_pt:"",
                mf_as:""
              })})
            
            .catch((err)=>toast.error(err.response.data));
            //setTimeout(()=>navigate.push("/"),500);
            //navigate("/");
        

    };

    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setState({...state,[name]:value});
    };

  return (
<React.Fragment>
<div>
  
      

      <Card style={{maxWidth:"500",padding:"40px 5px"}}>
        <CardContent>
          
        <form onSubmit={handleSub}>
        {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
           <Grid container spacing={2}>
          <Grid xs={4} sm={3} item>
              <TextField label="Serial Number" placeholder="Enter Serial Number" name="serialNumber" onChange={handleInputChange} varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Flying Squad Unit" placeholder="Enter Flying Squad Unit " name="flyingSquadUnit" onChange={handleInputChange}  varient="filled" fullWidth  />
            </Grid>

            {/* <Grid xs={4} sm={3} item>
              <TextField label="Form Type" placeholder="Enter Form Type" name="formType" onChange={handleInputChange}  varient="filled" fullWidth  />
            </Grid> */}

            <Grid xs={6} sm={4} item  >

<FormControl fullWidth variant="outlined">
    <InputLabel id="formType" varient="outlined"  >Form Type</InputLabel>
    <Select
        labelId="formType"
        label="Form Type"
        name="formType"
        value={formType}
        onChange={handleInputChange}
    >
        <MenuItem value="3phase">3phase</MenuItem>
        <MenuItem value="1phase">1phase</MenuItem>
        <MenuItem value="HT">HT</MenuItem>
    </Select>
</FormControl>
</Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Theft Detected By" placeholder="Theft Detected By" name="theftDetectedBy" onChange={handleInputChange} varient="filled" fullWidth  />
            </Grid>
            <Grid xs={3}  sm={2}  item>
              <TextField label="Place" placeholder="Enter place " name="place" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid item xs={1.5}>
          <TextField
            label="Time"
            name="time"
            id="time"
            variant="outlined"
            value={formattedTime}
            fullWidth
            
            InputProps={{
              readOnly: true, // Prevent user input
              style: { fontWeight: "bold" },
            }}
           />
           </Grid>
           <Grid item xs={3}>
          <TextField

            label="Date"
            name="date"
            id="date"
            type='datetime-local'
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
            
           
           />
           </Grid>
            <Grid xs={12} sm={6} item  >
              <TextField label="Consumer Number"  type="number"placeholder="Enter Consumer Number"  name="consumerNumber" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>
            

            <Grid xs={12} sm={6} item  >
              <TextField label="BU Number"  type="number"placeholder="Enter BU Number"  name="buNumber" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="name" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField  type="text"label="Address" placeholder="Enter Consumer Address" name="address"  onChange={handleInputChange} varient="outlined" multiline rows={4} fullWidth  />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="nameOfOwner" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="contactNumber" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            


            <Grid xs={4} sm={3} item>
              <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="category" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>
            
            <Grid xs={4} sm={3}item>
              <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="typeOfInstallation" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariffDetails" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={4} sm={3}item>
              <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="sanctionedLoad" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="connectedLoad" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>
            <Grid xs={4} sm={3}item>
              <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normalWorkingHours" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="nameOfBillingOffice" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            
             </Grid>
{/* //===================================================================================================== */}
            <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Details</Typography>
            <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
        <FormControl fullWidth>
          <InputLabel id="meter-installed-select-label">Whether meter installed in meter box or not</InputLabel>
          <Select labelId="meter-installed-select-label" 
          label="Whether meter installed in meter box or not"
          id="meterInstalled"
          value={meterin}
          onChange={handleChangeYN}
          
          >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
        </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Serial No. As per Bill" placeholder="Enter Meter Serial No. As per Bill"  name="meterSerialNumber" onChange={handleInputChange} variant="outlined" fullWidth />
          </Grid>
          
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Make" placeholder="Enter Meter Make" variant="outlined" name="make" onChange={handleInputChange}  fullWidth />
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Capacity in Amp" placeholder="Enter Meter Capacity in Amp" name="capacity" onChange={handleInputChange} variant="outlined" fullWidth />
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="External CT ratio if any" placeholder="Enter External CT ratio" name="externalCtRatio" onChange={handleInputChange} variant="outlined" fullWidth />
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Lab No." placeholder="Enter Lab No." variant="outlined" name='labNo' onChange={handleInputChange} fullWidth />
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Type" placeholder="Enter Type" variant="outlined" name='type' onChange={handleInputChange}  fullWidth />
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Rev, Imp/Wh" placeholder="Enter Rev, Imp/Wh" variant="outlined" name='revImpKwh' onChange={handleInputChange} fullWidth />
          </Grid>
          

          <Grid xs={12} sm={6} item>
          <TextField label="meter CT ratio" placeholder="Enter Meter CT Ratio" variant="outlined" name='meterCTRatio' onChange={handleInputChange} fullWidth />
          </Grid>
          
          <Grid xs={12} sm={6} item>
          <TextField label="MF as per bill" placeholder="Enter Meter Make" name='meterMake' variant="outlined"  onChange={handleInputChange} fullWidth />
          </Grid>
  
          </Grid>
{/* //================================================================================================== */}

          
          <Grid container spacing={2}>
          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Reading</Typography>
          
      
          <MeterTable ref={meterTableRef} />
  
          

          <Grid xs={12} sm={6} item>
          <TextField label="Scale Factor" placeholder="Enter  Scale Factor" variant="outlined" name='scaleFactor' onChange={handleInputChange} fullWidth />
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Over all MF for units" placeholder="Enter  Over all MF for units" name='overallMFForUnit' onChange={handleInputChange} variant="outlined" fullWidth />
          </Grid>
          {/* <Other/> */}

          <Typography gutterBottom variant="h6">VIII (c)</Typography>
        <Grid container spacing={2}>
                   {/* <Grid xs={3} sm={2} item  >
                         <TextField label="Over all MF for unit"  placeholder=""  name="overall_mf"varient="outlined" fullWidth  />
                   </Grid> */}

                   <Grid xs={3} sm={2} item  >
                         <TextField type='number' label="Freq.(in Hz)"  placeholder=""  name="freq" onChange={handleInputChange} varient="outlined" fullWidth  />
                   </Grid>

                   <Grid xs={5} sm={4} item  >
                         <TextField label="Whether Meter data read through MRI/Laptop"  placeholder=""  name="whetherMeterDataReadThroughMriLaptop" onChange={handleInputChange} varient="outlined" fullWidth  />
                   </Grid>

                   <Grid xs={5} sm={4} item  >
                         <TextField label="Whether meter data collected successfully"  placeholder=""  name="whetherDataCollectedSuccessfully" onChange={handleInputChange} varient="outlined" fullWidth  />
                   </Grid>

                   
                   <Grid xs={5} sm={4} item  >
                         <TextField label="If NO, specify reason"  placeholder=""  name="ifNoSpecifyReason" onChange={handleInputChange} varient="outlined" fullWidth  />
                   </Grid>
                   

                   



        </Grid>



        <Typography gutterBottom variant="h6" sx={{marginTop:5}}>IX Details of seals and its condition</Typography>
          <Grid container spacing={2}>
            <Grid xs={3} sm={2} item  >
              <TextField label="On Meter Box"  placeholder=""  name="onMeterBox" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={3}  sm={2} item>
              <TextField label="On Meter Body" placeholder="" name="onMeterBody" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={3} sm={2}item>
              <TextField  type="text"label=" On Meter terminal cover" placeholder="" name="onMeterTerminalCover" onChange={handleInputChange} varient="outlined"  fullWidth  />
            </Grid>

            

            {/* <Grid xs={3}  sm={2} item>
              <TextField label="MD Reset" placeholder="" name="md_reset" varient="outlined" fullWidth  />
            </Grid> */}

            <Grid xs={3} sm={2} item>
              <TextField  label="On Optical Port" placeholder="" name="onOpticalPort" onChange={handleInputChange} varient="outlined" fullWidth   />
            </Grid>

            <Grid xs={3} sm={2} item>
              <TextField  label="CT Box if any" placeholder="" name="ctBoxIfAny" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>


            <Grid xs={4} sm={3} item>
              <TextField label="Other" placeholder="" name="other" onChange={handleInputChange} varient="outlined" fullWidth  />
            </Grid>
            </Grid> 

          </Grid>
{/* //============================================================================= */}

          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Current and Volt Measurement</Typography>
          <Grid container spacing={2}>
          <Grid xs={12} sm={9} item>
            <CurrentVoltTable ref={currentVoltTableRef} />
          </Grid>

        
        </Grid>


          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>XII General Observations</Typography>


<Grid container spacing={2}>
     <Grid xs={4} sm={3} item  >
           <TextField label="Meter Capacitor is Installed"  placeholder=""  name="capacitorInstalled" onChange={handleInputChange} varient="outlined" fullWidth  />
     </Grid>

     <Grid  sm={4} item  >
           <TextField label="If Yes Whether capacity is adequate or not "  placeholder=""  name="adequateOrNot" onChange={handleInputChange} varient="outlined" fullWidth  />
     </Grid>

     <Grid xs={3} sm={2} item  >
           <TextField label="Meter installed at"  placeholder=""  name="meterInstalledAt" onChange={handleInputChange} varient="outlined" fullWidth  />
     </Grid>

     <Grid  xs={4} sm={3} item  >
           <TextField label="Meter installed at eye sight"  placeholder=""  name="meterInstalledAtEyesight" onChange={handleInputChange} varient="outlined" fullWidth  />
     </Grid>
    
     <Grid xs={3} sm={2} item  >
           <TextField label="Other Observation if any"  placeholder=""  name="otherObservations" onChange={handleInputChange} varient="outlined"  />
     </Grid>


</Grid>

          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Details of Connected Loads</Typography>
          <Grid container spacing={2}></Grid>
          <Table ref={tableRef} />
          

          
          <Grid container spacing={3} style={{marginTop:"20px"}}>
          <Grid xs={4} sm={3} item  >
           <TextField label="Whether Meter / Service kept under Observation?"  placeholder=""  name="whetherMeterServiceKeptUnderObservation" onChange={handleInputChange} varient="outlined" fullWidth  />
          </Grid>

         
     </Grid>
            {/* <Inspection/> */}
            <Typography gutterBottom variant="h6" ></Typography>
                        <Grid container spacing={2}>
                        <Grid xs={12}  item  >
                            <TextField label="Irrgularaties Observed" placeholder="Enter Observed Irregularities" multiline rows={5} name="irregularitiesObserved" onChange={handleInputChange} varient="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={6} sm={4} item  >

<FormControl fullWidth variant="outlined">
    <InputLabel id="inspection-service-is-liable" varient="outlined"  >According to inspection service is liable to book</InputLabel>
    <Select
        labelId="inspection-service-is-liable"
        label="According to inspection service is liable to book"
        id="meterdata"
        value={inspect}
        onChange={handleChangeInspect}
    >
        <MenuItem value="u/s 135">U/s 135</MenuItem>
        <MenuItem value="u/s 126">U/s 126</MenuItem>
        <MenuItem value="nil">Nil</MenuItem>
        <MenuItem value="other">Other</MenuItem>
        <MenuItem value="u/o case">U/O Case</MenuItem>
    </Select>
</FormControl>
</Grid>

{showTextField && <Grid xs={12} sm={6} item  >
<TextField label="If Under Observation" placeholder="" name="under_obser" varient="outlined" fullWidth />
</Grid>}

<Grid  sm={4} item  >
<TextField label="If Yes, Justify"  placeholder=""  name="cap_adequate" onChange={handleInputChange} varient="outlined" fullWidth  />
</Grid>
              

                        

                        <Grid xs={12} sm={6} item  >
                            <TextField label="Remedial action proposed" placeholder=""  name="remed_action" onChange={handleInputChange} varient="outlined" fullWidth  />
                        </Grid>


                        <Grid xs={12} sm={6} item  >
                            <TextField label="Instruction to Consumer/Representative if any" placeholder=""  name="instruct_consum" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>

                        <Grid xs={12} sm={6} item  >
                            <TextField label="Instruction to billing Incharge" placeholder=""  name="instruct_bill" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} sm={6} item  >
                            <TextField label="Meter HT/LT side" placeholder=""  name="meter_ht" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} sm={6} item  >
                            <TextField label="Whether meter/installing cubicle or not" placeholder=""  name="whether_meter_cub" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} sm={6} item  >
                            <TextField label="Meter PT ratio" placeholder=""  name="meter_pt" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} sm={6} item  >
                            <TextField label="External PT ratio" placeholder=""  name="external_pt" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} sm={6} item  >
                            <TextField label="MF as perbilling record" placeholder=""  name="mf_as" onChange={handleInputChange}  varient="outlined" fullWidth  />
                        </Grid>

    </Grid>

    <Grid container spacing={2}>
        {/* Image Input */}
        <Grid item xs={12}>
          <input
            type="file"
            id="imageInput"
            name="images"
            multiple
            accept="image/*"
          />
        </Grid>

        <Grid item xs={12}>
          <input
            type="file"
            id="signatureInput"
            name="signature"
            multiple
            accept="signature/*"
          />
        </Grid>

        {/* Video Input */}
        <Grid item xs={12}>
          <input type="file" id="videoInput" name="video" accept="video/*" />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>

          {/* <Grid xs={12} item style={{width:"400px"}}>
              <Button type="submit" varient="contained" color="primary"  fullWidth>Submit</Button>
          </Grid>  */}
        
          </form>
        </CardContent>

      </Card>
      {/* <div>
      <input type="file" name='images' multiple onChange={handleChange} />
      <button onClick={handleSubmit}>Upload Images</button>
    </div>

    <div>
      <input type="file" name='video' onChange={handleChangevd} />
      <button onClick={uploadVideo} disabled={!selectedFile}>Upload Video</button>
    </div> */}

      <Link to={"/"}>
  <button style={{width:100}}>Log out</button>
  </Link>
      
    </div>


</React.Fragment>



  )
}


// {/* //--------------------------------------------------------------------------------
// // //Second

// //     // <div>
// //     //  <Typography gutterBottom variant="h3" align="center">
// //     //     Consumer Profile


// //     //   </Typography>

// //     //   <Card style={{maxWidth:"500",margin:"0 auto",padding:"40px 5px"}}>
// //     //     <CardContent>
// //     //     <form onSubmit={handleSubmit}>
// //     //     {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
//      {/* //       <Grid container spacing={2}>
// //     //         <Grid xs={12} sm={6} item  >
// //     //           <TextField label="Consumer Number"  type="number"placeholder="Enter Consumer Number" value={consumer_number} onChange={handleInputChange} name="consumer_number"varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={10}  sm={6} item>
// //     //           <TextField label="Consumer Name" placeholder="Enter Consumer Name"  onChange={handleInputChange} name="consumer_name" value={consumer_name} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Address" placeholder="Enter Consumer Address" onChange={handleInputChange} name="address"  value={address} varient="outlined" multiline rows={4} fullWidth  />
// //     //         </Grid>

            

// //     //         <Grid xs={12}  sm={6}item>
// //     //           <TextField label="Name Of Owner" placeholder="Enter Owner Name" onChange={handleInputChange} name="owner_name" value={owner_name} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={8 } sm={6} item>
// //     //           <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" onChange={handleInputChange} name="mob_num_owner" value={mob_num_owner} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12} sm={6} item>
// //     //           <TextField type="number" label=" Mobile Number Of User" placeholder="Enter User Mobile Number" onChange={handleInputChange} name="mob_num_user" value={mob_num_user} varient="outlined" fullWidth  />
// //     //         </Grid>


// //     //         <Grid xs={12}  sm={6} item>
// //     //           <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" onChange={handleInputChange} name="category" value={category} varient="outlined" fullWidth  />
// //     //         </Grid>
            
// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" onChange={handleInputChange} name="installation_type" value={installation_type} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" onChange={handleInputChange} name="tariff_app" value={tariff_app} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12}  sm={6}item>
// //     //           <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" onChange={handleInputChange} name="san_load" value={san_load} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" onChange={handleInputChange} name="conn_load" value={conn_load} varient="outlined" fullWidth  />
// //     //         </Grid>
// //     //         <Grid xs={12}  sm={6}item>
// //     //           <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" onChange={handleInputChange} name="normal_working_hrs" value={normal_working_hrs} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12}  sm={6}item>
// //     //           <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" onChange={handleInputChange} name="name_of_billing" value={name_of_billing} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Arrears As On Date" placeholder="Enter Arrears as On Date" onChange={handleInputChange} name="arrears_date" value={arrears_date} varient="outlined" fullWidth  />
// //     //         </Grid>

// //     //          <Grid xs={12} sm={6}item>
// //     //          <TextField label="Is Billing abnormally Observed" placeholder="Enter Owner Name" onChange={handleInputChange} name="billing" value={billing} varient="outlined" fullWidth  />
// //     //         </Grid> 
                 

// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Meter Number Mismatch" placeholder="Enter Meter Number Mismatch" onChange={handleInputChange} name="meter_number" value={meter_number} varient="outlined" fullWidth  />
// //     //         </Grid>
// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Difference In Tariff" placeholder="Enter difference in Tariff"  onChange={handleInputChange} name="differ_tariff" value={differ_tariff} varient="outlined" fullWidth  />
// //     //         </Grid>
// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Exceeding Demand" placeholder="Enter Exceeding Demand" onChange={handleInputChange} name="exceed_tariff" value={exceed_tariff} varient="outlined" fullWidth  />
// //     //         </Grid>
// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Abnormal Reading" placeholder="Enter Abnormal Reading" onChange={handleInputChange} name="abnormal_reading" value={abnormal_reading} varient="outlined" fullWidth  />
// //     //         </Grid>
// //     //         <Grid xs={12} sm={6}item>
// //     //           <TextField label="Billing with Abnormal Status" placeholder="Enter Abnormal Status" onChange={handleInputChange} name="billing_abnor_stat" value={billing_abnor_stat} varient="outlined" fullWidth  />
// //     //         </Grid>



// //     //         <Grid xs={12} item>
// //     //           <Button type="submit" varient="contained" color="primary" value="save" fullWidth>Submit</Button>
// //     //         </Grid>

// //     //       </Grid>
// //     //             <Link to="/">
// //     //              <input type="button" value="Go Back" />
// //     //             </Link>
// //     //       </form> */}
// {/*//        // </CardContent> */}

//    {/* //   </Card>/*}
//     // </div> */}

//     {/* //-----------------------------------------------------------------
//     //first
//     // <div style={{marginTop:"100px"}}>
//     //     <form style={{
//     //         margin:"auto",
//     //         padding:"15px",
//     //         maxWidth:"400px",
//     //         alignContent:"center" */}
//     {/* //     }}
//     //     onSubmit={handleSubmit}>
//     //         <label htmlFor="name">Name</label>
//     //         <input type="text" id='name' name='name' placeholder='Your Name ...'  */}
//     {/* //         value={name} onChange={handleInputChange}
//     //          />

//     //         <label htmlFor="email">Email</label>
//     //         <input type="email" id='email' name='email' placeholder='Your Email ...' 
//     //         value={email} onChange={handleInputChange}
//     //          />

//     //         <label htmlFor="contact">Contact</label>
//     //         <input type="number" id='contact' name='contact' placeholder='Your Contact No...' 
//     //         value={contact} onChange={handleInputChange}
//     //          />

//     //          <input type="submit" value="save"/>
//     //          <Link to="/">
//     //             <input type="button" value="Go Back" />
//     //          </Link>
//     //     </form>
      
//     // </div>
//   //)
// //} */}
