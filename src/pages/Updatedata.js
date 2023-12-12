import React,{useState, useEffect} from 'react';
//import {Link} from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
//import {toast} from "react-toastify";
import axios from 'axios';
import MaterialTable from "material-table";
import { Typography, Card, CardContent, Grid, Select,MenuItem,TextField,FormControl,InputLabel, Alert} from "@mui/material";
import { useParams } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';


 
export default function Updatedata() {
  const defaultMaterialTheme = createTheme();

  // const [data2, setTableData] = useState([
  //   { zonename: 'Zl', kWh: '98890', MD_kW: '', kVAH: '142602', kVA_MD: '45.7', RkVAH: '', pf: '', anamoly: '' },
  // ]);
 

  const columns=[
    {title:"Zones",field:"zonename"},
    {title:"kWh",field:"kWh"},
    {title:"MD kW",field:"MD_kW"},
    {title:"kVAH",field:"kVAH"},
    {title:"kVA MD",field:"kVA_MD"},
    {title:"RkVAH",field:"RkVAH"},
    {title:"Pf",field:"pf"},
    {title:"Anamoly if any",field:"anamoly_if_any"},]

    const columns3 = [
      {title:"Current and Volt measurement",field:"CVmeasure"},
      {title:"R phase",field:"rPhase"},
      {title:"Y phase",field:"yPhase"},
      {title:"B Phase",field:"bPhase"},
    ];

    const columns4 = [
      {title:"Equipment Name",field:"eqname"},
      {title:"Quantity",field:"quantity"},
      {title:"Capacity",field:"capacity"},
      {title:"Measurment Unit",field:"munit"},
      {title:"Total Load",field:"totLoad"},
      {title:"Load in KW",field:"loadKW"},
    ];


    const[data1,setData]=useState({});
    const { id } =useParams();
    useEffect(()=>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => {
            const initialData = resp.data[0];
            setState({
                  serialNumber  :initialData.SerialNumber,
                  flyingSquadUnit  :initialData.flyingSquadUnit,
                  formType:initialData.formType,
                  theftDetectedBy  :initialData.theftDetectedBy,
                  place  :initialData.place,
                  consumerNumber  :initialData.consumerNumber,
                  buNumber  :initialData.buNumber,
                  name  :initialData.name,
                  address  :initialData.address,
                  nameOfOwner  :initialData.nameOfOwner,
                  contactNumber  :initialData.contactNumber,
                  category  :initialData.category,
                  typeOfInstallation  :initialData.typeOfInstallation,
                  tariffDetails  :initialData.tariffDetails,
                  sanctionedLoad  :initialData.sanctionedLoad,
                  connectedLoad  :initialData.connectedLoad,
                  normalWorkingHours  :initialData.normalWorkingHours,
                  nameOfBillingOffice  :initialData.nameOfBillingOffice,
                  meterSerialNumber  :initialData.meterSerialNumber,
                  make  :initialData.make,
                  capacity  :initialData.capacity,
                  externalCtRatio  :initialData.externalCtRatio,
                  labNo  :initialData.labNo,
                  type  :initialData.type,
                  revImpKwh  :initialData.revImpKwh,
                  meterCTRatio  :initialData.meterCTRatio,
                  meterMake  :initialData.meterMake,
                  scaleFactor  :initialData.scaleFactor,
                  overallMFForUnit  :initialData.overallMFForUnit,
                  freq  :initialData.freq,
                  whetherMeterDataReadThroughMriLaptop  :initialData.whetherMeterDataReadThroughMriLaptop,
                  whetherDataCollectedSuccessfully  :initialData.whetherDataCollectedSuccessfully,
                  ifNoSpecifyReason  :initialData.ifNoSpecifyReason,
                  onMeterBox  :initialData.onMeterBox,
                  onMeterBody  :initialData.onMeterBody,
                  onMeterTerminalCover  :initialData.onMeterTerminalCover,
                  onOpticalPort  :initialData.onOpticalPort,
                  ctBoxIfAny  :initialData.ctBoxIfAny,
                  other  :initialData.other,
                  capacitorInstalled  :initialData.capacitorInstalled,
                  adequateOrNot  :initialData.adequateOrNot,
                  meterInstalledAt  :initialData.meterInstalledAt,
                  meterInstalledAtEyesight  :initialData.meterInstalledAtEyesight,
                  otherObservations  :initialData.otherObservations,
                  whetherMeterServiceKeptUnderObservation  :initialData.whetherMeterServiceKeptUnderObservation,
                  cap_adequate  :initialData.cap_adequate,
                  irregularitiesObserved  :initialData.irregularitiesObserved,
                  inspect_serv  :initialData.inspect_serv,
                  under_obser  :initialData.under_obser,
                  remed_action  :initialData.remed_action,
                  instruct_consum  :initialData.instruct_consum,
                  instruct_bill :initialData.instruct_bill,
                  meterInstalled:initialData.meterInstalled,
                  meter_ht:initialData.meter_ht,
            whether_meter_cub:initialData.whether_meter_cub,
            meter_pt:initialData.meter_pt,
            external_pt:initialData.external_pt,
            mf_as:initialData.mf_as,
                  date:initialData.Date,
                  time:initialData.Time
            });
      })
            
        
    },[id]);
    
   const [data2,setData2]=useState([]);
   const [data3,setData3]=useState([]);
   const [data4,setData4]=useState([]);
     //const { MainID } =useParams();
    useEffect(()=>{
      axios
      .get(`http://localhost:5000/api/get/meterR/${id}`)
      .then((resp)=>
      setData2(resp.data))
          
          .catch((error) => {
            console.error('Error fetching data:', error);
          });   

          
      
  },[id]);
  useEffect(()=>{
    axios
    .get(`http://localhost:5000/api/get/tableTwo/${id}`)
    .then((resp)=>
    setData3(resp.data))
        
        .catch((error) => {
          console.error('Error fetching data:', error);
        });   

        
    
},[id]);

useEffect(()=>{
  axios
  .get(`http://localhost:5000/api/get/tableThree/${id}`)
  .then((resp)=>
  setData4(resp.data))
      
      .catch((error) => {
        console.error('Error fetching data:', error);
      });   

      
  
},[id]);
const [state, setState] = useState({
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
      inspect_serv  :"",
      under_obser  :"",
      remed_action  :"",
      instruct_consum  :"",
      instruct_bill :"",
      meterInstalled:"",
      date:"",
      time:"",
      meter_ht:"",
      whether_meter_cub:"",
      meter_pt:"",
      external_pt:"",
      mf_as:""
    });
    
    const handleUpdate = (e) => {
      e.preventDefault();
      console.log("Update successfully");
      axios
        .put(`http://localhost:5001/api/update/${id}`, {
            serialNumber  :state.serialNumber,
            flyingSquadUnit  :state.flyingSquadUnit,
            formType:state.formType,
            theftDetectedBy  :state.theftDetectedBy,
            place  :state.place,
            consumerNumber  :state.consumerNumber,
            buNumber  :state.buNumber,
            name  :state.name,
            address  :state.address,
            nameOfOwner  :state.nameOfOwner,
            contactNumber  :state.contactNumber,
            category  :state.category,
            typeOfInstallation  :state.typeOfInstallation,
            tariffDetails  :state.tariffDetails,
            sanctionedLoad  :state.sanctionedLoad,
            connectedLoad  :state.connectedLoad,
            normalWorkingHours  :state.normalWorkingHours,
            nameOfBillingOffice  :state.nameOfBillingOffice,
            meterSerialNumber  :state.meterSerialNumber,
            make  :state.make,
            capacity  :state.capacity,
            externalCtRatio  :state.externalCtRatio,
            labNo  :state.labNo,
            type  :state.type,
            revImpKwh  :state.revImpKwh,
            meterCTRatio  :state.meterCTRatio,
            meterMake  :state.meterMake,
            scaleFactor  :state.scaleFactor,
            overallMFForUnit  :state.overallMFForUnit,
            freq  :state.freq,
            whetherMeterDataReadThroughMriLaptop  :state.whetherMeterDataReadThroughMriLaptop,
            whetherDataCollectedSuccessfully  :state.whetherDataCollectedSuccessfully,
            ifNoSpecifyReason  :state.ifNoSpecifyReason,
            onMeterBox  :state.onMeterBox,
            onMeterBody  :state.onMeterBody,
            onMeterTerminalCover  :state.onMeterTerminalCover,
            onOpticalPort  :state.onOpticalPort,
            ctBoxIfAny  :state.ctBoxIfAny,
            other  :state.other,
            capacitorInstalled  :state.capacitorInstalled,
            adequateOrNot  :state.adequateOrNot,
            meterInstalledAt  :state.meterInstalledAt,
            meterInstalledAtEyesight  :state.meterInstalledAtEyesight,
            otherObservations  :state.otherObservations,
            whetherMeterServiceKeptUnderObservation  :state.whetherMeterServiceKeptUnderObservation,
            cap_adequate  :state.cap_adequate,
            irregularitiesObserved  :state.irregularitiesObserved,
            inspect_serv  :state.inspect_serv,
            under_obser  :state.under_obser,
            remed_action  :state.remed_action,
            instruct_consum  :state.instruct_consum,
            instruct_bill :state.instruct_bill,
            meterInstalled:state.meterInstalled,
            date:state.date,
            time:state.time,
            meter_ht:state.meter_ht,
            whether_meter_cub:state.whether_meter_cub,
            meter_pt:state.meter_pt,
            external_pt:state.external_pt,
            mf_as:state.mf_as,

            data2,
            data3,
            data4
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    };
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

//     if (!state.place || !state.consumerNumber || !state.address) {
//       return <div>Loading...</div>;
//     }
    const styles = {
  card: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px 10px',
    backgroundColor: '#f0f8ff', // Light blue background
    borderRadius: '15px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  form: {
    marginTop: '20px',
  },
  textField: {
    width: '100%',
    marginBottom: '15px',
    backgroundColor: '#fff', // White background for text fields
    borderRadius: '8px', // Rounded corners for text fields
  },
  title: {
    marginBottom: '20px',
    color: '#3f51b5', // Dark blue title color
    borderBottom: '2px solid #3f51b5', // Underline effect
    paddingBottom: '5px',
  },
};
  // const w=data1.SerialNumber;
  // console.log(w);
  // const v=data2;
  // console.log(v)
  
   return (
    <Card>

    
        <CardContent>
        <form >
        <Typography variant="h4" style={styles.title}>Customer Form</Typography>
      <Grid container spacing={2}>
      <Grid item xs={4} sm={3}>
      <TextField
      label="Serial Number"
      variant="outlined"
      InputLabelProps={{ shrink: true }} // This ensures the label stays at the border
      name="serialNumber"
      value={state.serialNumber}
      onChange={handleInputChange}
      
      
      style={styles.textField}
    />
      </Grid>
       <Grid item xs={4} sm={3}>
      <TextField
      label="Flying Squad Unit"
      variant="outlined"
      InputLabelProps={{ shrink: true }} // This ensures the label stays at the border
      name="flyingSquadUnit"
      value={state.flyingSquadUnit}
      onChange={handleInputChange}
      
      />
            
     </Grid>
     <Grid item xs={4} sm={3}>
      <TextField
      label="Form Type"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="formType"
      value={state.formType}
      onChange={handleInputChange}

      
      />
            
     </Grid>
     <Grid item xs={4} sm={3}>
      <TextField
      label="Theft Detected By"
      variant="outlined"
      InputLabelProps={{ shrink: true }} // This ensures the label stays at the border
      name="theftDetectedBy"
      value={state.theftDetectedBy}
      onChange={handleInputChange}
      
      
      />
            
     </Grid>

     <Grid item xs={4} sm={3}>
      <TextField
      label="Place"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="place"
      value={state.place}
      onChange={handleInputChange}
      
      />
            
     </Grid>

     
     
     <Grid item xs={4} sm={3}>
      <TextField
      label="Date"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="date"
      value={state.date}
      onChange={handleInputChange}

      
      />
            
     </Grid> 
     <Grid item xs={4} sm={3}>
      <TextField
      label="Time"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="time"
      value={state.time}
      onChange={handleInputChange}
      
      />
            
     </Grid> 
     <Grid item xs={4} sm={3}>
      <TextField
      label="Consumer Number"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      
      name="consumerNumber"
      value={state.consumerNumber}
          onChange={handleInputChange}
      
      />
            
     </Grid> 
     <Grid item xs={4} sm={3}>
      <TextField
      label="BU Number"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="buNumber"
      value={state.buNumber}
      onChange={handleInputChange}
      
      />
            
     </Grid> 
     
     <Grid item xs={4} sm={3}>
      <TextField
      label="Consumer Name" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="name"
      value={state.name}
      onChange={handleInputChange}
      
      />        
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Address"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
       name="address"
      value={state.address}
          onChange={handleInputChange}
      
      />       
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Name Of Owner"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="nameOfOwner"
      value={state.nameOfOwner}
      onChange={handleInputChange}
     
      
      
      
      />       
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Mobile Number Of Owner"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="contactNumber"
      value={state.contactNumber}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Category/Tariff"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="category"
      value={state.category}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Actual Type of Installation"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="typeOfInstallation"
      value={state.typeOfInstallation}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Tariff Applicable" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="tariffDetails"
      value={state.tariffDetails}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Sanctioned Load"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="sanctionedLoad"
      value={state.sanctionedLoad}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Connected Load"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="connectedLoad"
      value={state.connectedLoad}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Normal Working Hrs"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="normalWorkingHours"
      value={state.normalWorkingHours}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Name of Billing Office"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="nameOfBillingOffice"
      value={state.nameOfBillingOffice}
      onChange={handleInputChange}
      
      />           
</Grid>
</Grid>
<Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Details</Typography>
 <Grid container spacing={2}>
<Grid item xs={4} sm={3}>
      <TextField
      label="Whether meter installed in meter box or not"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meterInstalled"
      value={state.meterInstalled}
      onChange={handleInputChange}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter Serial No. As per Bill"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meterSerialNumber"
      value={state.meterSerialNumber}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter Make"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="make"
      value={state.make}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter Capacity in Amp"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="capacity"
      value={state.capacity}
      onChange={handleInputChange}
      
      />           
</Grid>
<Grid item xs={4} sm={3}>
      <TextField
      label="External CT ratio if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="externalCtRatio"
      value={state.externalCtRatio}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Lab No."
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="labNo"
      value={state.labNo}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Type"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="type"
      value={state.type}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Rev, Imp/Wh" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="revImpKwh"
      value={state.revImpKwh}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="meter CT ratio"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meterCTRatio"
      value={state.meterCTRatio}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="MF as per bill"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meterMake"
      value={state.meterMake}
      onChange={handleInputChange}
      
      />           
</Grid>
</Grid>
 
<div className='Table1'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
      columns={columns}
      data={data2}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            // Handle the row update logic here
            // newData contains the updated data
            // oldData contains the original data

            // For example, update the state
            const updatedData = [...data2];
            updatedData[oldData.tableData.id] = newData;
            setData2(updatedData);

            // Resolve the promise to signal that the update was successful
            resolve();
          }),
      }}
      title={<h2>Meter Reading</h2>}
      options={{ paging: false, actionsColumnIndex: -1, search: false }}
    />
  </ThemeProvider>
</div>


        <Grid container spacing={2}>
<Grid item xs={4} sm={3}>
      <TextField
      label="Scale Factor"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="scaleFactor"
      value={state.scaleFactor}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Over all MF for units"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="overallMFForUnit"
      value={state.overallMFForUnit}
      onChange={handleInputChange}
      
      />           
</Grid>
</Grid>
<Typography gutterBottom variant="h6">VIII (c)</Typography>
        <Grid container spacing={2}>
<Grid item xs={4} sm={3}>
      <TextField
       label="Freq.(in Hz)"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="freq"
      value={state.freq}
      onChange={handleInputChange}
      
      />           
</Grid>


<Grid item xs={4} sm={3}>
      <TextField
       label="Whether Meter data read through MRI/Laptop"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="whetherMeterDataReadThroughMriLaptop"
      value={state.whetherMeterDataReadThroughMriLaptop}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Whether meter data collected successfully" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="whetherDataCollectedSuccessfully"
      value={state.whetherDataCollectedSuccessfully}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If NO, specify reason"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="ifNoSpecifyReason"
      value={state.ifNoSpecifyReason}
      onChange={handleInputChange}
     
      />           
</Grid>
</Grid>
<Typography gutterBottom variant="h6" sx={{marginTop:5}}>IX Details of seals and its condition</Typography>
          <Grid container spacing={2}>

<Grid item xs={4} sm={3}>
      <TextField
       label="On Meter Box"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="onMeterBox"
      value={state.onMeterBox}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="On Meter Body"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="onMeterBody"
      value={state.onMeterBody}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label=" On Meter terminal cover"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="onMeterTerminalCover"
      value={state.onMeterTerminalCover}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="On Optical Port"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="onOpticalPort"
      value={state.onOpticalPort}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="CT Box if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="ctBoxIfAny"
      value={state.ctBoxIfAny}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Other"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="other"
      value={state.other}
      onChange={handleInputChange}
      
      />           
</Grid>
</Grid>
<div className='Table2'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
      columns={columns3}
      data={data3}
      editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                // Handle the row update logic here
                // newData contains the updated data
                // oldData contains the original data
    
                // For example, update the state
                const updatedData = [...data3];
                updatedData[oldData.tableData.id] = newData;
                setData3(updatedData);
    
                // Resolve the promise to signal that the update was successful
                resolve();
              }),
          }}
      title={<h2>Current And Volt Measurement</h2>}
      options={{ paging: false, actionsColumnIndex: -1, search: false }}
    
    />
  </ThemeProvider>
</div>
<Typography gutterBottom variant="h6" sx={{marginTop:5}}>XII General Observations</Typography>


<Grid container spacing={2}>
<Grid item xs={4} sm={3}>
      <TextField
       label="Meter Capacitor is Installed"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="capacitorInstalled"
      value={state.capacitorInstalled}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If Yes Whether capacity is adequate or not "
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="adequateOrNot"
      value={state.adequateOrNot}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Meter installed at"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meterInstalledAt"
      value={state.meterInstalledAt}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Meter installed at eye sight"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meterInstalledAtEyesight"
      value={state.meterInstalledAtEyesight}
      onChange={handleInputChange}
      
      />  
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Other Observation if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="otherObservations"
      value={state.otherObservations}
      onChange={handleInputChange}
      
      />     
</Grid>
</Grid>

<div className='Table3'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
      columns={columns4}
      data={data4}
      editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                // Handle the row update logic here
                // newData contains the updated data
                // oldData contains the original data
    
                // For example, update the state
                const updatedData = [...data4];
                updatedData[oldData.tableData.id] = newData;
                setData4(updatedData);
    
                // Resolve the promise to signal that the update was successful
                resolve();
              }),
          }}
      title={<h2>Details Of Connected Load</h2>}
      options={{ paging: false, actionsColumnIndex: -1, search: false }}
    
    />
  </ThemeProvider>
</div>

          <Grid container spacing={4}>

<Grid item xs={4} sm={3}>
      <TextField
       label="Whether Meter / Service kept under Observation?"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="whetherMeterServiceKeptUnderObservation"
      value={state.whetherMeterServiceKeptUnderObservation}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If Yes, Justify"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="cap_adequate"
      value={state.cap_adequate}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
        label="Irrgularaties Observed"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="irregularitiesObserved"
      value={state.irregularitiesObserved}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="According to inspection service is liable to book"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="inspect_serv"
      value={state.inspect_serv}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If Under Observation" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="under_obser"
      value={state.under_obser}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
        label="Remedial action proposed"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="remed_action"
      value={state.remed_action}
      onChange={handleInputChange}
      
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Instruction to Consumer/Representative if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="instruct_consum"
      value={state.instruct_consum}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Instruction to billing Incharge"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="instruct_bill"
      value={state.instruct_bill}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter HT/LT side"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meter_ht"
      value={state.meter_ht}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Whether meter/installing cubicle or not"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="whether_meter_cub"
      value={state.whether_meter_cub}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter PT ratio"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="meter_pt"
      value={state.meter_pt}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="External PT ratio"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="external_pt"
      value={state.external_pt}
      onChange={handleInputChange}
     
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="MF as perbilling record"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      name="mf_as"
      value={state.mf_as}
      onChange={handleInputChange}
     
      />           
</Grid>
</Grid>

          <Grid xs={12} item style={{marginTop:"20px"}}>
              <button onClick={handleUpdate} type="submit" varient="contained" color="primary">Update</button>
             
          </Grid>

 </form>
    </CardContent>
    </Card>

  )
}
