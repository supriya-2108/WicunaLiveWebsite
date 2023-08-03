import React, { useState } from 'react'

const BodyMeasurement = (props) => {
    const [measureData,setMeasurementData]=useState({
        KurtiLength:"",BlouseLength:"",Shoulder:"",UpperChest:"",Chest:"",UpperWaist:"",Waist:"",Tummy:"",Hip:"",ChestLength:"",WaistLength:"",HipLength:"",Armhole:"",UpperArm:'',SleevesLength:'',SleevesBottom:"",FrontCross:"",BackCross:"",BottomLength:"",BottomWaist:"",Thigh:"",Knee:"",Calve:"",Mori:""
    })
    const saveMeasure=(event)=>{
      const {name,value}=event.target;
      setMeasurementData((prevFormDate)=>({...prevFormDate,[name]:value}));
    }
    const clickedbutton=()=>{
            
            props.measurement(measureData,setMeasurementData);
    }

  return (
    <>
      <h3 style={{marginLeft:"43%"}}>MEASUREMENT</h3>
      <input type="text" name="KurtiLength" value={measureData.KurtiLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Kurti Length" />
      <input type="text" name="BlouseLength" value={measureData.BlouseLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Blouse Length" />
      <input type="text" name="Shoulder" value={measureData.Shoulder} onChange={saveMeasure} className='input_class_Measurement' placeholder="Shoulder" />
      <input type="text" name="UpperChest" value={measureData.UpperChest} onChange={saveMeasure} className='input_class_Measurement' placeholder="UpperChest" />
      <input type="text" name="Chest" value={measureData.Chest} onChange={saveMeasure} className='input_class_Measurement' placeholder="Chest" />
      <input type="text" name="UpperWaist" value={measureData.UpperWaist} onChange={saveMeasure} className='input_class_Measurement' placeholder="UpperWaist" />
      <input type="text" name="Waist" value={measureData.Waist} onChange={saveMeasure} className='input_class_Measurement' placeholder="Waist" />
      <input type="text" name="Tummy" value={measureData.Tummy} onChange={saveMeasure} className='input_class_Measurement' placeholder="Tummy" />
      <input type="text" name="Hip" value={measureData.Hip} onChange={saveMeasure} className='input_class_Measurement' placeholder="Hip" />
      <input type="text" name="ChestLength" value={measureData.ChestLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Chest Length" />
      <input type="text" name="WaistLength" value={measureData.WaistLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Waist Length" />
      <input type="text" name="HipLength" value={measureData.HipLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Hip Length" />
      <input type="text" name="Armhole" value={measureData.Armhole} onChange={saveMeasure} className='input_class_Measurement' placeholder="Armhole" />
      <input type="text" name="UpperArm" value={measureData.UpperArm} onChange={saveMeasure} className='input_class_Measurement' placeholder="UpperArm" />
      <input type="text" name="SleevesLength" value={measureData.SleevesLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Sleeves Length" />
      <input type="text" name="SleevesBottom" value={measureData.SleevesBottom} onChange={saveMeasure} className='input_class_Measurement' placeholder="Sleeves Bottom" />
      
      <input type="text" name="FrontCross" value={measureData.FrontCross} onChange={saveMeasure} className='input_class_Measurement' placeholder="Front Cross" />
      <input type="text" name="BackCross" value={measureData.BackCross} onChange={saveMeasure} className='input_class_Measurement' placeholder="Back Cross" />
      <input type="text" name="BottomLength" value={measureData.BottomLength} onChange={saveMeasure} className='input_class_Measurement' placeholder="Bottom Length" />
      <input type="text" name="BottomWaist" value={measureData.BottomWaist} onChange={saveMeasure} className='input_class_Measurement' placeholder="Bottom Waist" />
      <input type="text" name="Thigh" value={measureData.Thigh} onChange={saveMeasure} className='input_class_Measurement' placeholder="Thigh" />
      <input type="text" name="Knee" value={measureData.Knee} onChange={saveMeasure} className='input_class_Measurement' placeholder="Knee" />
      <input type="text" name="Calve" value={measureData.Calve} onChange={saveMeasure} className='input_class_Measurement' placeholder="Calve" />
      <input type="text" name="Mori" value={measureData.Mori} onChange={saveMeasure} className='input_class_Measurement' placeholder="Mori" />
     
      
      <button onClick={clickedbutton} style={{marginTop:"5%",marginLeft:"40%",width:"50%",height:"40px",backgroundColor:"Orange"}}>Save Measurement</button>
       
    </>
  )
}

export default BodyMeasurement
