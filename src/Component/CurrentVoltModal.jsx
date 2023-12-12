import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Modal.css";
export const CurrentVoltModal = ({closeModal2, onSubmit,defaultValue}) => {
    const [formState, setFormState]=useState(defaultValue||{
        CVmeasure: "",
        rPhase: "",
        yPhase: "",
        bPhase:""
      })
    
      const [errors, setErrors] = useState("")
    
      const validateForm=(e)=>{
        if(formState.CVmeasure && formState.rPhase && formState.yPhase && formState.bPhase)
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
        closeModal2();
      }
      return (
        <div className="modal-container" onClick={(e)=>{
          if(e.target.className==="modal-container")
          closeModal2();
          }}>
          <div className="modal">
            <form action="">
              <div className="form-group">
                <label htmlFor="CVmeasure">Current and Volt measurement</label>
                <input type="text" name="CVmeasure" id="" value={formState.CVmeasure} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="rPhase">R phase</label>
                <input type="text" name="rPhase" id="" value={formState.rPhase} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="yPhase">Y phase</label>
                <input type="text" name="yPhase" id="" value={formState.yPhase} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="bPhase">B Phase</label>
                <input type="text" name="bPhase" id="" value={formState.bPhase} onChange={handleChange}/>
              </div>
              
              {errors && <div className="error">{`Please Make Sure That All the Fields Are Filled`}</div>}
            <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      );
}
