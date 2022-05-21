import "./App.css";
import Form from "./components/Form";
import BmiScore from "./components/BmiScore";
import BmiList from "./components/BmiList";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);
  const [changeWeight, setchangeWeight] = useState({wight: "", type: ""});
  const [bmi, setBmi] = useState("00");
  const [type, setType] = useState("Not Calculated");
  const [BmiRange, setBmiRange] = useState({
    underWeight: {low: ""},
    normal: {low: "", high: ""},
    overWeight: {low: "", high: ""},
    ObesityOne: {low: "", high: ""},
    ObesityTwo: {low: "", high: ""},
    ObesityThree: {high: ""}
   });
  const onFormSub = (w, h) => {
    let b = calBmi(w,h)
    setBmi(b)
    let c = weightType(b)
    setType(c)
    console.log(w, h);
    const range ={
      underWeight: {low: calWeight(18.5, h)},
      normal: {low: calWeight(18.5, h), high: calWeight(24.9, h)},
      overWeight: {low: calWeight(25, h), high: calWeight(29.5, h)},
      ObesityOne: {low: calWeight(30, h), high: calWeight(34.9, h)},
      ObesityTwo: {low: calWeight(35, h), high: calWeight(39.5, h)},
      ObesityThree: {high: calWeight(40, h)}
    }
    setBmiRange(range)
    setchangeWeight(changew(b,w,range));
    setshow(true)
  };


  
  const calBmi =(w,h) => {
    return(w /(h*h)).toFixed(2)
  }
  const calWeight = (b,h) => (b*h*h).toFixed(2);

  const changew = (b,w,range)=> {
  let changeObj;
  if(b > 24.9) {
    changeObj = {
      wight: (w -range.normal.high).toFixed(2),
      type: "positive",
    };
    return changeObj;
  }else if(b < 18.5) {
    changeObj = {
      wight: (range.normal.low -w).toFixed(2),
      type: "negative",
    };
    return changeObj;
  }else{
    changeObj = {wight: 0, type: "normal"}
    return changeObj;
  }
  };


  const weightType = (bmi) => {
    if(bmi < 18.5) {
      return "Under weight"
    }else if(18.5 < bmi && bmi <24.9) {
      return "Normal"
    }else if(24.9 < bmi && bmi <29.9) {
      return "Over weight"
    }else if(29.9 < bmi && bmi <34.9) {
      return "Obesity Class I"
    }else if(34.9 < bmi && bmi <39.9) {
      return "Obesity Class II"
    }else if(bmi > 39.9) {
      return "Obesity class III"
    }
  };

  // const changeBmi = () =>{
  //   setbmi(bmi + 10)
  //   console.log(bmi)
  // }

  return (
    <>
      <div className="container">
        <Form getData={onFormSub} />
      </div>
      {show &&(
      <div className="mx-auto container-fluid mt-3 row mb-5">
        <div className="col-12 col-md-12 col-lg-6 mt-4">
          <div className="box-1">
            <BmiScore bmiNo={bmi} bmiType={type} changeWeight={changeWeight} />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 mt-4">
          <div className="box-2 ">
            <BmiList range={BmiRange} bmi={bmi} />
          </div>
          </div>
      </div>
      )}
    </>
  );
}

export default App;
