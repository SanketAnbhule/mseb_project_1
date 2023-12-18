import React,{useState, useEffect} from 'react';
//import {Link} from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
//import {toast} from "react-toastify";
import axios from 'axios';
import MaterialTable from "material-table";
import { Typography, Card, CardContent, Grid, Select,MenuItem,TextField,FormControl,InputLabel} from "@mui/material";
import { useParams } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useApi } from './ApiContext';
export default function View() {
  const defaultMaterialTheme = createTheme();
  const baseUrl = useApi();
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
        .get(`${baseUrl}/api/get/${id}`)
        .then((resp)=>
            setData({...resp.data[0]}));
            
        
    },[baseUrl,id]);
    
   const [data2,setData2]=useState([]);
   const [data3,setData3]=useState([]);
   const [data4,setData4]=useState([]);
     //const { MainID } =useParams();
    useEffect(()=>{
      axios
      .get(`${baseUrl}/api/get/meterR/${id}`)
      .then((resp)=>
      setData2(resp.data))
          
          .catch((error) => {
            console.error('Error fetching data:', error);
          });   

          
      
  },[baseUrl,id]);
  useEffect(()=>{
    axios
    .get(`${baseUrl}/api/get/tableTwo/${id}`)
    .then((resp)=>
    setData3(resp.data))
        
        .catch((error) => {
          console.error('Error fetching data:', error);
        });   

        
    
},[baseUrl,id]);

useEffect(()=>{
  axios
  .get(`${baseUrl}/api/get/tableThree/${id}`)
  .then((resp)=>
  setData4(resp.data))
      
      .catch((error) => {
        console.error('Error fetching data:', error);
      });   

      
  
},[baseUrl,id]);

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
      value={data1.SerialNumber}
      InputProps={{
        readOnly: true, // Make the input field read-only
      }}
      style={styles.textField}
    />
      </Grid>
      <Grid item xs={4} sm={3}>
      <TextField
      label="Form Type"
      variant="outlined"
      InputLabelProps={{ shrink: true }} // This ensures the label stays at the border
      value={data1.formType}
      InputProps={{
        readOnly: true, // Make the input field read-only
      }}
      />
            
     </Grid>

       <Grid item xs={4} sm={3}>
      <TextField
      label="Flying Squad Unit"
      variant="outlined"
      InputLabelProps={{ shrink: true }} // This ensures the label stays at the border
      value={data1.flyingSquadUnit}
      InputProps={{
        readOnly: true, // Make the input field read-only
      }}
      />
            
     </Grid>
     <Grid item xs={4} sm={3}>
      <TextField
      label="Theft Detected By"
      variant="outlined"
      InputLabelProps={{ shrink: true }} // This ensures the label stays at the border
      value={data1.theftDetectedBy}
      InputProps={{
        readOnly: true, // Make the input field read-only
      }}
      />
            
     </Grid>

     <Grid item xs={4} sm={3}>
      <TextField
      label="Place"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.place}
      InputProps={{
        readOnly: true, 
      }}
      />
            
     </Grid>

     
     
     <Grid item xs={4} sm={3}>
      <TextField
      label="Date"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.Date}
      InputProps={{
        readOnly: true, 
      }}
      />
            
     </Grid> 
     <Grid item xs={4} sm={3}>
      <TextField
      label="Time"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.Time}
      InputProps={{
        readOnly: true, 
      }}
      />
            
     </Grid> 
     <Grid item xs={4} sm={3}>
      <TextField
      label="Consumer Number"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.consumerNumber}
      InputProps={{
        readOnly: true, 
      }}
      />
            
     </Grid> 
     <Grid item xs={4} sm={3}>
      <TextField
      label="BU Number"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.buNumber}
      InputProps={{
        readOnly: true, 
      }}
      />
            
     </Grid> 
     
     <Grid item xs={4} sm={3}>
      <TextField
      label="Consumer Name" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.name}
      InputProps={{
        readOnly: true, 
      }}
      />        
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Address"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.address}
      InputProps={{
        readOnly: true, 
      }}
      />       
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Name Of Owner"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.nameOfOwner}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Mobile Number Of Owner"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.contactNumber}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Category/Tariff"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.category}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Actual Type of Installation"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.typeOfInstallation}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Tariff Applicable" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.tariffDetails}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Sanctioned Load"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.sanctionedLoad}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Connected Load"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.connectedLoad}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Normal Working Hrs"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.normalWorkingHours}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Name of Billing Office"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.nameOfBillingOffice}
      InputProps={{
        readOnly: true, 
      }}
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
      value={data1.meterInstalled}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter Serial No. As per Bill"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.meterSerialNumber}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter Make"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.make}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Meter Capacity in Amp"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.capacity}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>
<Grid item xs={4} sm={3}>
      <TextField
      label="External CT ratio if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.externalCtRatio}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>
{data1.formType!=="1phase" &&(
  <>

<Grid item xs={4} sm={3}>
      <TextField
      label="Lab No."
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.labNo}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Type"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.type}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Rev, Imp/Wh" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.revImpKwh}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="meter CT ratio"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.meterCTRatio}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="MF as per bill"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.meterMake}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

 
<div className='Table1'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
      columns={columns}
      data={data2}
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
      value={data1.scaleFactor}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Over all MF for units"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.overallMFForUnit}
      InputProps={{
        readOnly: true, 
      }}
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
      value={data1.freq}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>


<Grid item xs={4} sm={3}>
      <TextField
       label="Whether Meter data read through MRI/Laptop"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.whetherMeterDataReadThroughMriLaptop}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Whether meter data collected successfully" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.whetherDataCollectedSuccessfully}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If NO, specify reason"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.ifNoSpecifyReason}
      InputProps={{
        readOnly: true, 
      }}
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
      value={data1.onMeterBox}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label=" On Meter terminal cover"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.onMeterBody}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="On Optical Port"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.onOpticalPort}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="CT Box if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.ctBoxIfAny}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Other"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.other}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

</Grid>
</>
)}


<div className='Table2'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
      columns={columns3}
      data={data3}
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
      value={data1.capacitorInstalled}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If Yes Whether capacity is adequate or not "
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.adequateOrNot}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Meter installed at"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.meterInstalledAt}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Meter installed at eye sight"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.meterInstalledAtEyesight}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Other Observation if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.otherObservations}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>
</Grid>

<div className='Table3'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
      columns={columns4}
      data={data4}
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
      value={data1.whetherMeterServiceKeptUnderObservation}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If Yes, Justify"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.cap_adequate}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
        label="Irrgularaties Observed"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.irregularitiesObserved}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="According to inspection service is liable to book"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.inspect_serv}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="If Under Observation" 
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.under_obser}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
        label="Remedial action proposed"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.remed_action}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
       label="Instruction to Consumer/Representative if any"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.instruct_consum}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>

<Grid item xs={4} sm={3}>
      <TextField
      label="Instruction to billing Incharge"
      variant="outlined"
      InputLabelProps={{ shrink: true }} 
      value={data1.instruct_bill}
      InputProps={{
        readOnly: true, 
      }}
      />           
</Grid>
{data1.formType === 'HT' && (
            <>
              <Grid item xs={4} sm={3}>
                <TextField
                  label="Meter HT/LT side"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={data1.meter_ht}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={4} sm={3}>
                <TextField
                  label="Whether meter/installing cubicle or not"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={data1.whether_meter_cub}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={4} sm={3}>
                <TextField
                  label="Meter PT ratio"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={data1.meter_pt}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={4} sm={3}>
                <TextField
                  label="External PT ratio"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={data1.external_pt}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={4} sm={3}>
                <TextField
                  label="MF as per billing record"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={data1.mf_as}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </>
          )}


</Grid>
</Grid>

 </form>
    </CardContent>
    </Card>

  )
}
