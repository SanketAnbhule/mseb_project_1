import React from 'react';

import { Typography, Card, CardContent, Grid, TextField } from "@mui/material";
function Other(){
  
  
    return(
     <React.Fragment>
        
   

    
        <form>
        <Typography gutterBottom variant="h6">VIII (c)</Typography>
        <Grid container spacing={2}>
                   {/* <Grid xs={3} sm={2} item  >
                         <TextField label="Over all MF for unit"  placeholder=""  name="overall_mf"varient="outlined" fullWidth required />
                   </Grid> */}

                   <Grid xs={3} sm={2} item  >
                         <TextField type='number' label="Freq.(in Hz)"  placeholder=""  name="freq"  varient="outlined" fullWidth required />
                   </Grid>

                   <Grid xs={5} sm={4} item  >
                         <TextField label="Whether Meter data read through MRI/Laptop"  placeholder=""  name="whetherMeterDataReadThroughMriLaptop"  varient="outlined" fullWidth required />
                   </Grid>

                   <Grid xs={5} sm={4} item  >
                         <TextField label="Whether meter data collected successfully"  placeholder=""  name="whetherDataCollectedSuccessfully"  varient="outlined" fullWidth required />
                   </Grid>

                   
                   <Grid xs={5} sm={4} item  >
                         <TextField label="If NO, specify reason"  placeholder=""  name="ifNoSpecifyReason"  varient="outlined" fullWidth required />
                   </Grid>
                   

                   



        </Grid>



        <Typography gutterBottom variant="h6" sx={{marginTop:5}}>IX Details of seals and its condition</Typography>
          <Grid container spacing={2}>
            <Grid xs={3} sm={2} item  >
              <TextField label="On Meter Box"  placeholder=""  name="onMeterBox"  varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={3}  sm={2} item>
              <TextField label="On Meter Body" placeholder="" name="onMeterBody"  varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={3} sm={2}item>
              <TextField  type="text"label=" On Meter terminal cover" placeholder="" name="onMeterTerminalCover"  varient="outlined"  fullWidth required />
            </Grid>

            

            {/* <Grid xs={3}  sm={2} item>
              <TextField label="MD Reset" placeholder="" name="md_reset" varient="outlined" fullWidth required />
            </Grid> */}

            <Grid xs={3} sm={2} item>
              <TextField  label="On Optical Port" placeholder="" name="onOpticalPort"  varient="outlined" fullWidth  required />
            </Grid>

            <Grid xs={3} sm={2} item>
              <TextField  label="CT Box if any" placeholder="" name="ctBoxIfAny"  varient="outlined" fullWidth  />
            </Grid>


            <Grid xs={4} sm={3} item>
              <TextField label="Other" placeholder="" name="other"  varient="outlined" fullWidth required />
            </Grid>
            </Grid> 
            </form>
        


     </React.Fragment>



    );
}

export default Other;