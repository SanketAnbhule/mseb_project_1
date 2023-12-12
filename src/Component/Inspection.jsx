import React from 'react';
import { Typography, TextField, Grid } from "@mui/material";
function Inspection() {
    

    return (
        <React.Fragment>
                    <form style={{marginTop:"20px"}}>
                        <Typography gutterBottom variant="h6" ></Typography>
                        <Grid container spacing={2}>
                        <Grid xs={12}  item  >
                            <TextField label="Irrgularaties Observed" placeholder="Enter Observed Irregularities" multiline rows={5} name="irregularitiesObserved"  varient="outlined" fullWidth required />
                        </Grid>

                        <Grid xs={12} sm={6} item  >
                            <TextField label="According to inspection service is liable to book" placeholder=""  name="inspect_serv" varient="outlined" fullWidth required />
                        </Grid>

                        <Grid xs={12} sm={6} item  >
                            <TextField label="If Under Observation" placeholder=""  name="under_obser"  varient="outlined" fullWidth required />
                        </Grid>

                        <Grid xs={12} sm={6} item  >
                            <TextField label="Remedial action proposed" placeholder=""  name="remed_action"  varient="outlined" fullWidth required />
                        </Grid>


                        <Grid xs={12} sm={6} item  >
                            <TextField label="Instruction to Consumer/Representative if any" placeholder=""  name="instruct_consum"   varient="outlined" fullWidth required />
                        </Grid>

                        <Grid xs={12} sm={6} item  >
                            <TextField label="Instruction to billing Incharge" placeholder=""  name="instruct_bill"  varient="outlined" fullWidth required />
                        </Grid>

                        </Grid>
                    </form>


        </React.Fragment>

    );
}

export default Inspection;