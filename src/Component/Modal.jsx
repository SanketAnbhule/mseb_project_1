import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({closeModal, onSubmit,defaultValue}) =>{
  const [formState, setFormState]=useState(defaultValue||{
    eqname: "",
      quantity: "",
      capacity: "",
      munit:"",
      totLoad:"",
      loadKW:"",
  })

  const [errors, setErrors] = useState("")

  const validateForm=(e)=>{
    if(formState.eqname && formState.capacity && formState.quantity && formState.loadKW && formState.munit && formState.totLoad)
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

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!validateForm()) return;
    
    onSubmit(formState);
    closeModal();
  }
  return (
    <div className="modal-container" onClick={(e)=>{
      if(e.target.className==="modal-container")
      closeModal();
      }}>
      <div className="modal">
        <form action="">
          <div className="form-group">
            <label htmlFor="eqname">Equipment Name</label>
            <input type="text" name="eqname" id="" value={formState.eqname} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" id="" value={formState.quantity} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Capacity</label>
            <input type="text" name="capacity" id="" value={formState.capacity} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="munit">Measurement Unit</label>
            <input type="text" name="munit" id="" value={formState.munit} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="totLoad">Total Load</label>
            <input type="text" name="totLoad" id="" value={formState.totLoad} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="loadKW">Load in KW</label>
            <input type="text" name="loadKW" id="" value={formState.loadKW} onChange={handleChange}/>
          </div>
          {errors && <div className="error">{`Please Make Sure That All the Fields Are Filled`}</div>}
        <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};