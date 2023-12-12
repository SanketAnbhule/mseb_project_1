import React, { useState } from 'react';
import axios from 'axios';

const initialState={
    msg:"",
    Place:"",
    Date:"",
    Time:""
};

export default function Home() {
    const [state,setState]=useState(initialState);
    const {Place,Date,Time}=state;
    //const [place, setPlace] = useState('');

   
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value});

    }

    let submit=async(e)=>{
        e.preventDefault();
        
        // const user={
        //     msg:msg,
        //     Place:Place,
        //     Date:Date,
        //     Time:Time
        // }
        
           // alert("submitted");
            axios.post("http://localhost:8000/",{
            Place,
            Date
            Time
             })
             .then(()=>{
                setState({Place:"",Date:"",Time:""});
             })  
             .catch(e=>{
                console.log(e.toJSON().message);
             })
            
        }
        
    
 return (
    <form action="POST">
        <div className='cont'>
            {/* <textarea name="text" onChange={handleInput} placeholder="enter text here" cols="30" rows="10"></textarea> */}
            <table>
                   <tbody>
                   <tr>
                      <td><label>Place</label></td>
                      <td><input type="text" onChange={handleInput}/></td>
                      <td><label>Date</label></td>
                      <td><input type="text" onChange={handleInput}/></td>
                      <td><label>Time</label></td>
                      <td><input type="text" onChange={handleInput}/></td>
                   </tr>
                   </tbody>
            </table>
            <input type="submit" onClick={submit} value="Submit" />
        </div>
            
    </form>
  )
}
