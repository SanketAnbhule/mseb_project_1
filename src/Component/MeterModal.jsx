import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Modal.css";
export const MeterModal = ({closeModal1, onSubmit,defaultValue}) => {
    const [formState, setFormState]=useState(defaultValue||{
        zonename: "",
        kWh: "",
        MD_kW: "",
        kVAH:"",
        kVA_MD:"",
        RkVAH:"",
      })
      
    
      const [errors, setErrors] = useState("")
    
      const validateForm=(e)=>{
        if(formState.zonename && formState.kWh && formState.MD_kW && formState.kVAH && formState.kVA_MD && formState.RkVAH)
        {
          setErrors("")
          return true;
        }
        else
        {
          let errorFields=[];
          for(const [key,value] of Object.entries(formState)){
            if(!value)
            {
              errorFields.push(key);
            }
          }
          setErrors(errorFields.join(", "));
          return false;
        }
      }
      const handleChange=(e)=>{
        setFormState({
          ...formState,
          [e.target.name]:e.target.value
        })
      }
      //setRows1([...rows1, formState]);
      // setFormState({zonename: "",
      // kWh: "",
      // MD_kW: "",
      // kVAH:"",
      // kVA_MD:"",
      // RkVAH:""});
    
      const handleSubmit=(e)=>{
        e.preventDefault();
        if(!validateForm()) return;
        
        onSubmit(formState);
        closeModal1();
      }
      return (
        <div className="modal-container" onClick={(e)=>{
          if(e.target.className==="modal-container")
          closeModal1();
          }}>
          <div className="modal">
            <form action="">
              <div className="form-group">
                <label htmlFor="zonename">Zone Name</label>
                <input type="text" name="zonename" id="" value={formState.zonename} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="kWh">kWh</label>
                <input type="text" name="kWh" id="" value={formState.kWh} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="MD_kW"> MD kW</label>
                <input type="text" name="MD_kW" id="" value={formState.MD_kW} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="kVAH"> kVAH</label>
                <input type="text" name="kVAH" id="" value={formState.kVAH} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="kVA_MD">kVA MD</label>
                <input type="text" name="kVA_MD" id="" value={formState.kVA_MD} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="RkVAH"> RkVAH</label>
                <input type="text" name="RkVAH" id="" value={formState.RkVAH} onChange={handleChange}/>
              </div>
              
              {errors && <div className="error">{`Please Make Sure That All the Fields Are Filled`}</div>}
            <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      );
}
