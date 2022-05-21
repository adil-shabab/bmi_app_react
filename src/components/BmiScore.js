
function BmiScore(props) {


    const{bmiNo,bmiType,changeWeight} = props
  return (
    <div className=" text-center p-4">
        <div className="fs-3"><b>Your Bmi Score</b></div>
        <div className="row w-25 mx-auto">
            <div className="p-3 my-2 alert fs-1 alert-primary ">{bmiNo}</div>
        </div>
        <div className="fs-3 fw-bold text-primary">{bmiType}</div>
        {changeWeight.type === "positive" && (
            <div className="fs-4">"You Need Lose <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
        )}
        {changeWeight.type === "negative" && (
            <div className="fs-4">"You Need Gain <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
        )}
        {changeWeight.type === "normal" && (
            <div className="fs-4">"Your weight is Normal, Good for you </div>
        )}
    </div>
  )
}

export default BmiScore