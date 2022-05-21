import { useState } from "react";

function Form({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setalert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight) || isNaN(height)){
        setalert(true)
    }else{
        getData(weight,height)
        setalert(false)
        setWeight("")
        setheight("")
    }
    
  };

//   let alertMessage
// if (alert) {
//    alertMessage = <div className="alert alert-danger">Please Enter Valid Datas</div>
// }else{
//     alertMessage = ""
// }


  // const getWeight =(e)=>{
  //     setWeight(e.target.value)
  // }

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 mt-3 mx-auto shadow rounded px-5 py-1">
        <h4 className="text-center pt-3 text-secondary h2">Bmi Calculator</h4>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-6">
              <div>
                <label className="form-label fw-bold">Wieght(kg)</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div>
                <label className="form-label fw-bold">Height(m)</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setheight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get Bmi"
          />
        </form>
        {alert === true ? <div className="alert alert-danger">Please Enter Valid Datas</div>: null}
        {/* ternary operation */}
        {/* we can also avoid the === */}
        {/* we can also change the quersion mark to && and null */}
      </div>
    </>
  );
}

export default Form;
