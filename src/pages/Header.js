import React from 'react'
import { useState } from "react";

import { NavLink } from 'react-router-dom'
import {styled} from 'styled-components'
import {  Grid, Select,MenuItem,
   FormControl,InputLabel } from "@mui/material";
   
  
const Header = () => {
    const [meterin, setMeterIn] = useState('');

const handleChangeYN = (event) => {
  
  setMeterIn(event.target.value);
  
};
  return (
    <>
    <MainHeader>
        <NavLink to="/">
            <img src="https://www.mahadiscom.in/wp-content/uploads/2017/12/logo_main.jpg" alt="" style={{width:200}} />
        </NavLink>

        <Nav>
            <div className='menuIcon'>
                <ul className='navbar-list'>
                    
                    <li>
                    <Grid >
                    <Grid xs={6} sm={4} item>
                    <FormControl style={{width:150}}>
                        <InputLabel id="Forms">FORMS</InputLabel>
                        <Select labelId="Forms" 
                        label="Formst"
                        id="forms"
                        value={meterin}
                        onChange={handleChangeYN}
                        required>
                        <MenuItem value={"Form1"}><NavLink className="navbar-link" to="/Form"> 3P Form</NavLink></MenuItem>
                        <MenuItem value={"Form2"}><NavLink className="navbar-link" to="/Form_Phase1">1P Form </NavLink></MenuItem>
                        <MenuItem value={"Form3"}><NavLink className="navbar-link" to="/HtForm">HT Form </NavLink></MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    </Grid>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/search">VIEW</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/pending_form">PENDING FORMS</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/Login">LOGIN</NavLink>
                    </li>
                </ul>
            </div>

            

           
        </Nav>
    </MainHeader>
    </>
  )
}
const MainHeader= styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: rgb(255,255,255);
    display: flex;
    justify-content: space-between;
    align-items:center; 
`;

const Nav=styled.nav`
    .navbar-list{
        display: flex;
        gap:4.8rem;
        align-items:center;

        li{
            list-style:none;
            .navbar-link{
                text-decoration:none;
                &:link,
                &:visited{
                    dispaly: inline-block;
                    text-decoration: none;
                    font-size:1.3rem;
                    font-weight:500;
                    text-transform: uppercase;
                    color:black;
                    transition: color 0.3s linear;
                }

                &:hover,
                &:active {
                    color: red;
                }
            }
        }
    }
`;
export default Header