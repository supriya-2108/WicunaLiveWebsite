import React, { useState } from 'react'

const BodyMeasurement = (props) => {
    const [measureData,setMeasurementData]=useState({
        KurtiLength:"",BlouseLength:"",Shoulder:"",UpperChest:"",Chest:"",UpperWaist:"",Waist:"",Tummy:"",Hip:"",ChestLength:"",WaistLength:"",HipLength:"",Armhole:"",UpperArm:'',SleevesLength:"",FrontCross:"",BackCross:"",BottomLength:"",BottomWaist:"",Thigh:"",Knee:"",Calve:"",Mori:""
    })
    const itemsName=[ "KurtiLength","BlouseLength","Shoulder","UpperChest","Chest","UpperWaist","Waist","Tummy","Hip","ChestLength","WaistLength","HipLength","Armhole","UpperArm","SleevesLength","FrontCross","BackCross","BottomLength","BottomWaist","Thigh","Knee:","Calve","Mori"];

    const saveMeasure=(event)=>{
        const {name,value}=event.target;
            setMeasurementData((prevFormDate)=>({...prevFormDate,[name]:value}));
    }
    const clickedbutton=()=>{
            props.measurement(measureData);
    }
    
  return (
    <>
      <h3 style={{marginLeft:"43%"}}>MEASUREMENT</h3>
      {
        itemsName.map((val)=>{
            return <><input type="text" name={val} value={measureData.val} onChange={saveMeasure} className='input_class_Measurement' placeholder={val} /><br/></>
        })
      }
      <button onClick={clickedbutton} style={{marginTop:"5%",marginLeft:"40%",width:"50%",height:"40px",backgroundColor:"Orange"}}>Save Measurement</button>
       
    </>
  )
}

export default BodyMeasurement
