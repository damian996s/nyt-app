import React from 'react'

function DateInput({ max, min, value, onChange }) {
    return (
        <input className="date" type="date" max={max} min={min} value={value} onChange={onChange} style={{backgroundColor:"#282c34", border:"2px solid white", color:"white", width:"190px", outline:"none", fontSize:"17px"}}></input>
    )
}

export default DateInput
