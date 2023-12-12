import React from 'react'
import { NavLink } from 'react-router-dom'
import {styled} from 'styled-components'
const Header = () => {
  return (
    <>
    <MainHeader>
        <NavLink to="/">
            <img src="./Mahavitaranimg.png" alt="" style={{width:200}} />
        </NavLink>

        <Nav>
            <div className='menuIcon'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink className="navbar-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/Form">Form</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/">ABOUT MSEDCL</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/Login">Login</NavLink>
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