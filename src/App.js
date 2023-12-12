// import AddProduct from './AddProduct';
// import './App.css';
// import ProductList from './ProductsList';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<ProductList></ProductList> ,
//   },
//   {
//     path: "/add",
//     element: <AddProduct></AddProduct>,
//   }
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;




//import logo from './logo.svg';
// import './App.css';
// import Home from "./components/Home";

// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

// export default App;

//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home1 from "./pages/Home1";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import Updatedata from "./pages/Updatedata";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Navbarmecb from "./pages/Navbar_mecb";
import ThreePhase from "./pages/ThreePhase";
import OnePhase from "./pages/OnePhase";
import Ht from "./pages/Ht";
import PieChart from "./pages/PieChart";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
           <ToastContainer position="top-center"/>
           {/* <h1>Hello react</h1> */}
           {/* <Navbarmecb/> */}
           <Routes>
           
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />}/>
              <Route exact path="/data" Component={Home1}/>
              <Route path="/addContact" Component={AddEdit}/>
              <Route path="/view/:id" Component={View} />
              <Route path="/update/:id" Component={Updatedata} />
              <Route path="/search/:id" Component={Search} />
              <Route path="/data/3phase" Component={ThreePhase} />
              <Route path="/data/1phase" Component={OnePhase} />
              <Route path="/data/ht" Component={Ht} />
              <Route path="/data/piechart" Component={PieChart} />
           </Routes>
           
        </div>
    </BrowserRouter>
    
  );
}

export default App;

// import React from "react";
// import './App.css';
// import { Typography, Card, CardContent, Grid, TextField,Select,MenuItem, Button, InputLabel, FormControl } from "@mui/material";
// function App() {
  
//   return (
//     <div className="App">
//      <Typography gutterBottom variant="h3" align="center">
//         Consumer Profile


//       </Typography>

//       <Card style={{maxWidth:"500",margin:"0 auto",padding:"40px 5px"}}>
//         <CardContent>
//         <form>
//         {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
//           <Grid container spacing={2}>
//             <Grid xs={12} sm={6} item  >
//               <TextField label="Consumer Number"  type="number"placeholder="Enter Consumer Number"  name="consumer_num"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={10}  sm={6} item>
//               <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="consumer_name"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={12} sm={6}item>
//               <TextField label="Address" placeholder="Enter Consumer Address" name="address" varient="outlined" multiline rows={4} fullWidth required />
//             </Grid>

            

//             <Grid xs={12}  sm={6}item>
//               <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="owner_app" varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={8 } sm={6} item>
//               <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="mob_num_owner" varient="outlined" fullWidth  />
//             </Grid>

//             <Grid xs={12} sm={6} item>
//               <TextField type="number" label=" Mobile Number Of User" placeholder="Enter User Mobile Number" name="mob_num-user"varient="outlined" fullWidth  />
//             </Grid>


//             <Grid xs={12}  sm={6} item>
//               <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="cat"varient="outlined" fullWidth required />
//             </Grid>
            
//             <Grid xs={12} sm={6}item>
//               <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="tariff"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={12} sm={6}item>
//               <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariff_app"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={12}  sm={6}item>
//               <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="san_load"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={12} sm={6}item>
//               <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="conn_load"varient="outlined" fullWidth required />
//             </Grid>
//             <Grid xs={12}  sm={6}item>
//               <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normal_working"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={12}  sm={6}item>
//               <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="name_of_billing"varient="outlined" fullWidth required />
//             </Grid>

//             <Grid xs={12} sm={6}item>
//               <TextField label="Arrears As On Date" placeholder="Enter Arrears as On Date" name="arrears_date"varient="outlined" fullWidth  />
//             </Grid>

//              <Grid xs={12} sm={6}item>
//              <TextField label="Is Billing abnormally Observed" placeholder="Enter Owner Name" Name="billing"varient="outlined" fullWidth required />
//             </Grid> 
                 

//             <Grid xs={12} sm={6}item>
//               <TextField label="Meter Number Mismatch" placeholder="Enter Meter Number Mismatch" name="meter_number"varient="outlined" fullWidth required />
//             </Grid>
//             <Grid xs={12} sm={6}item>
//               <TextField label="Difference In Tariff" placeholder="Enter difference in Tariff"  name="differ_tariff" varient="outlined" fullWidth required />
//             </Grid>
//             <Grid xs={12} sm={6}item>
//               <TextField label="Exceeding Demand" placeholder="Enter Exceeding Demand" name="exceed_tariff" varient="outlined" fullWidth required />
//             </Grid>
//             <Grid xs={12} sm={6}item>
//               <TextField label="Abnormal Reading" placeholder="Enter Abnormal Reading" name="abnormal_reading"varient="outlined" fullWidth required />
//             </Grid>
//             <Grid xs={12} sm={6}item>
//               <TextField label="Billing with Abnormal Status" placeholder="Enter Abnormal Status" name="billing_abnor_stat"varient="outlined" fullWidth required />
//             </Grid>



//             <Grid xs={12} item>
//               <Button type="submit" varient="contained" color="primary" fullWidth>Submit</Button>
//             </Grid>

//           </Grid>
//           </form>
//         </CardContent>

//       </Card>
//     </div>
//   );
// }

// export default App;

