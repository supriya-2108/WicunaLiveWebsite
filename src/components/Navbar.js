import React, { useState } from 'react'
import Measurement from './Measurementapi';
const Navbar = (props) => {
  const [mes,setmes]=useState()
  const showMeasurement=(value)=>{
    const realMeasure=[...new Set(Measurement.map((val)=>{
          if(val.name===value){
            return val.measure;
          }  
      }))]

      if(value==="Kurti"){
      setmes(realMeasure[0]);
    }
    else{
      setmes(realMeasure[1]);
    }
    if(mes!=undefined){
    props.saveinfo(value,mes);
    }
  }
const [savedata,setsavedata]=useState({
  kurtiLength:"",BlouseLength:"",Shoulder:"",UpperChest:"",Chest:"",UpperWaist:"",Waist:"",Tummy:"",Hip:"",ChestLength:"",WaistLength:"",HipLength:"",Armhole:"",UpperArm:'',SleevesLength:""

}
)
  return (
   <>
         <nav  className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item'  onClick={()=>showMeasurement("Kurti")}>KURTI/TOP</button>
                <button className='btn-group__item' onClick={()=>showMeasurement("Pant")}>Pant</button>
                <button className='btn-group__item' onClick={()=>showMeasurement("Suit")}>SUIT</button>
                <button className='btn-group__item' onClick={()=>showMeasurement("Dress")}>DRESS</button>
            </div>
        </nav>
    
    {
      mes!=undefined?
        mes.map((val)=>{
        return <> <input type="text" name={val} value={val} className='input_class_Measurement' placeholder={val} /><br/></>
        }):""
      }
   </>
  )
}

export default Navbar
