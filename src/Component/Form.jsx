import React from 'react';
import { useState } from "react";
// import { makeStyles } from '@mui/material';
import { Typography, Card, CardContent, Grid, Select,MenuItem,
  TextField,FormControl,InputLabel } from "@mui/material";
// import "./App.css";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { MeterTable } from "./MeterTable";
import { MeterModal } from "./MeterModal";
import { CurrentVoltTable } from "./CurrentVoltTable";
import { CurrentVoltModal } from "./CurrentVoltModal";
import { Button } from '../styles/Button';

import { GlobalStyle } from './GlobalStyle';
import Other from './Other';
import Inspection from './Inspection';
function Form(){

// Select Values
const [meterin, setMeterIn] = useState('');

const handleChangeYN = (event) => {
  setMeterIn(event.target.value);
};

const [externalct, setExternalct] = useState('');

const handleChangeYN1 = (event) => {
  setExternalct(event.target.value);
};

// Tables
const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const [rows, setRows] = useState([
    {
      eqname: "Fan",
      quantity: "6",
      capacity: "5",
      munit:"KWH",
      totLoad:".53",
      loadKW:".23",
    }
  ]);
  const [rows1, setRows1] = useState([
    {
      zonename: "Zone1",
      kWh: "98890",
      MD_kW: "0",
      kVAH:"142602",
      kVA_MD:"45.7",
      RkVAH:"54512",
    }
  ]);
  const [rows2, setRows2] = useState([
    {
      CVmeasure: "Current measured at incoming supply",
        rPhase: "58 Amp",
        yPhase: "54 Amp",
        bPhase:"65 Amp"
    }
  ]);


  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowToEdit1, setRowToEdit1] = useState(null);
  const [rowToEdit2, setRowToEdit2] = useState(null);


  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleDeleteRow1 = (targetIndex) => {
    setRows1(rows1.filter((_, idx) => idx !== targetIndex));
  };
  const handleDeleteRow2 = (targetIndex) => {
    setRows2(rows2.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };
  const handleEditRow1 = (idx) => {
    setRowToEdit1(idx);

    setModalOpen1(true);
  };
  const handleEditRow2 = (idx) => {
    setRowToEdit2(idx);

    setModalOpen2(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };


  const handleSubmit1 = (newRow) => {
    rowToEdit1 === null
      ? setRows1([...rows1, newRow])
      : setRows1(
          rows1.map((currRow, idx) => {
            if (idx !== rowToEdit1) return currRow;

            return newRow;
          })
        );
  };

  const handleSubmit2 = (newRow) => {
    rowToEdit2 === null
      ? setRows2([...rows2, newRow])
      : setRows2(
          rows2.map((currRow, idx) => {
            if (idx !== rowToEdit2) return currRow;

            return newRow;
          })
        );
  };

    return(
    
<React.Fragment>
<div>
      

      <Card style={{maxWidth:"500",padding:"40px 5px"}}>
        <CardContent>
        <form>
        {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
          <Grid container spacing={2}>
          <Grid xs={4} sm={3} item>
              <TextField label="Serial Number" placeholder=" " name="serialNumber"varient="outlined" fullWidth required />
            </Grid>
{/* theftDetectedBy */}
            <Grid xs={4} sm={3} item>
              <TextField label="Flying Squad Unit" placeholder="Enter Flying Squad Unit " name="flyingSquadUnit" varient="filled" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Theft Detected By" placeholder="Theft Detected By" name="theftDetectedBy" varient="filled" fullWidth required />
            </Grid>
            <Grid xs={3}  sm={2}  item>
              <TextField label="Place" placeholder="Enter place " name="place" varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item  >
              <TextField label="Consumer Number"  type="number"placeholder="Enter Consumer Number"  name="consumerNumber"varient="outlined" fullWidth required />
            </Grid>
            {/* buNumber; */}

            <Grid xs={12} sm={6} item  >
              <TextField label="BU Number"  type="number"placeholder="Enter BU Number"  name="buNumber"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="name"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField  type="text"label="Address" placeholder="Enter Consumer Address" name="address" varient="outlined" multiline rows={4} fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="nameOfOwner"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="contactNumber" varient="outlined" fullWidth  />
            </Grid>

            {/* <Grid xs={4} sm={3} item>
              <TextField type="number" label=" Mobile Number Of User" placeholder="Enter User Mobile Number" name="mob_num-user"varient="outlined" fullWidth  />
            </Grid> */}


            <Grid xs={4} sm={3} item>
              <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="category"varient="outlined" fullWidth required />
            </Grid>
            
            <Grid xs={4} sm={3}item>
              <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="typeOfInstallation"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariffDetails"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3}item>
              <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="sanctionedLoad"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="connectedLoad"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={4} sm={3}item>
              <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normalWorkingHours"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="nameOfBillingOffice"varient="outlined" fullWidth required />
            </Grid>

            {/* <Grid xs={4} sm={3} item>
              <TextField label="Arrears As On Date" placeholder="Enter Arrears as On Date" name="meterSerialNumber"varient="outlined" fullWidth  />
            </Grid>

             <Grid xs={4} sm={3}item>
             <TextField label="Is Billing abnormally Observed"  Name="billing"varient="outlined" fullWidth required />
            </Grid> 
                 

            <Grid xs={4} sm={3}item>
              <TextField label="Meter Number Mismatch" placeholder="Enter Meter Number Mismatch" name="meter_number"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={4} sm={3}item>
              <TextField label="Difference In Tariff" placeholder="Enter difference in Tariff"  name="differ_tariff" varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Exceeding Demand" placeholder="Enter Exceeding Demand" name="exceed_tariff" varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Abnormal Reading" placeholder="Enter Abnormal Reading" name="abnormal_reading"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Billing with Abnormal Status" placeholder="Enter Abnormal Status" name="billing_abnor_stat"varient="outlined" fullWidth required />
            </Grid>  
             */}
             </Grid>

            <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Details</Typography>
            <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
        <FormControl fullWidth>
          <InputLabel id="meter-installed-select-label">Whether meter installed in meter box or not</InputLabel>
          <Select labelId="meter-installed-select-label" 
          label="Whether meter installed in meter box or not"
          id="meter-installed"
          value={meterin}
          onChange={handleChangeYN}
          required>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
        </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Serial No. As per Bill" placeholder="Enter Meter Serial No. As per Bill"  name="meterSerialNumber"variant="outlined" fullWidth required/>
          </Grid>
          {/* <Grid xs={12} sm={6} item>
          <TextField label="Actual Meter Serial No. at Site" placeholder="Enter Actual Meter Serial No. at Site" variant="outlined" fullWidth required/>
          </Grid> */}
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Make" placeholder="Enter Meter Make" variant="outlined" name="make" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Capacity in Amp" placeholder="Enter Meter Capacity in Amp" name="capacity" variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="External CT ratio if any" placeholder="Enter External CT ratio" name="externalCtRatio"variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Lab No." placeholder="Enter Lab No." variant="outlined" name='labNo'fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Type" placeholder="Enter Type" variant="outlined" name='type' fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Rev, Imp/Wh" placeholder="Enter Rev, Imp/Wh" variant="outlined" name='revImpKwh'fullWidth required/>
          </Grid>
          {/* <Grid xs={12} sm={6} item>
          <FormControl fullWidth>
          <InputLabel id="external-ct-select-label">Whether external CT connected?</InputLabel>
          <Select labelId="external-ct-select-label" 
          label="Whether external CT connected?"
          id="external-ct"
          value={externalct}
          onChange={handleChangeYN1}
          required>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
          </Grid> */}

          <Grid xs={12} sm={6} item>
          <TextField label="meter CT ratio" placeholder="Enter Meter CT Ratio" variant="outlined" name='meterCTRatio'fullWidth required/>
          </Grid>
          {/* <Grid xs={12} sm={6} item>
          <TextField label="meter PT ratio" placeholder="Enter Actual Meter Serial No. at Site" variant="outlined" fullWidth required/>
          </Grid> */}
          <Grid xs={12} sm={6} item>
          <TextField label="MF as per bill" placeholder="Enter Meter Make" variant="outlined" fullWidth required/>
          </Grid>
  
          </Grid>
          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Reading</Typography>
          <Grid container spacing={2}>
          <Grid xs={12} sm={9} item>
              <MeterTable rows={rows1} deleteRow={handleDeleteRow1} editRow={handleEditRow1}/>
              <Button onClick={() => setModalOpen1(true)} className="btn">
                Add
              </Button>
              {modalOpen1 &&<MeterModal 
              closeModal1={() => {
                setModalOpen1(false);
                setRowToEdit1(null);
              }}
              onSubmit={handleSubmit1}
              defaultValue={rowToEdit1 !== null && rows1[rowToEdit1]}/>}
          </Grid>
          {/* <Grid xs={12} sm={6} item>
          <TextField label="Power Factor on meter display" placeholder="Enter Power Factor on meter display" variant="outlined" fullWidth required/>
          </Grid> */}

          <Grid xs={12} sm={6} item>
          <TextField label="Scale Factor" placeholder="Enter  Scale Factor" variant="outlined" name='scaleFactor' fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Over all MF for units" placeholder="Enter  Over all MF for units" name='overallMFForUnit' variant="outlined" fullWidth required/>
          </Grid>
          <Other/>
          </Grid>
          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Current and Volt Measurement</Typography>
          <Grid container spacing={2}>
          <Grid xs={12} sm={9} item>
            <CurrentVoltTable rows={rows2} deleteRow={handleDeleteRow2} editRow={handleEditRow2} className="container grid grid-two-columns"/>
            <Button onClick={() => setModalOpen2(true)} className="btn">
              Add
            </Button>
            {modalOpen2 &&<CurrentVoltModal
            closeModal2={() => {
              setModalOpen2(false);
              setRowToEdit2(null);
            }}
            onSubmit={handleSubmit2}
            defaultValue={rowToEdit2 !== null && rows2[rowToEdit2]}

            />}

        </Grid>
        </Grid>

          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>XII General Observations</Typography>


<Grid container spacing={2}>
     <Grid xs={4} sm={3} item  >
           <TextField label="Meter Capacitor is Installed"  placeholder=""  name="capacitorInstalled"varient="outlined" fullWidth required />
     </Grid>

     <Grid  sm={4} item  >
           <TextField label="If Yes Whether capacity is adequate or not "  placeholder=""  name="adequateOrNot"varient="outlined" fullWidth required />
     </Grid>

     <Grid xs={3} sm={2} item  >
           <TextField label="Meter installed at"  placeholder=""  name="meterInstalledAt"varient="outlined" fullWidth required />
     </Grid>

     <Grid  xs={4} sm={3} item  >
           <TextField label="Meter installed at eye sight"  placeholder=""  name="meterInstalledAtEyesight"varient="outlined" fullWidth required />
     </Grid>
    
     <Grid xs={3} sm={2} item  >
           <TextField label="Other Observation if any"  placeholder=""  name="otherObservations"varient="outlined"  />
     </Grid>


</Grid>

          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Details of Connected Loads</Typography>
          <Grid container spacing={2}></Grid>

          
          <Grid xs={12} sm={9} item>
              <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              <Button onClick={() => setModalOpen(true)} className="btn">
                Add
              </Button>
              {modalOpen && (
                <Modal
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleSubmit}
                  defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
              )}
              
          </Grid>
          
          <Grid container spacing={3} style={{marginTop:"20px"}}>
          <Grid xs={4} sm={3} item  >
           <TextField label="Whether Meter / Service kept under Observation?"  placeholder=""  name="whetherMeterServiceKeptUnderObservation"varient="outlined" fullWidth required />
          </Grid>

     <Grid  sm={4} item  >
           <TextField label="If Yes, Justify"  placeholder=""  name="cap_adequate"varient="outlined" fullWidth required />
     </Grid>
     </Grid>
            <Inspection/>

          <Grid xs={12} item style={{marginTop:"20px"}}>
              <Button type="submit" varient="contained" color="primary" fullWidth>Submit</Button>
          </Grid>
        
          </form>
        </CardContent>

      </Card>
      
    </div>


</React.Fragment>



    );
} 
export default Form;