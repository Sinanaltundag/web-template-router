import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sended = () => {
    const location = useLocation();
    const sendedMsg = location.state.sendedMsg;
    let navigate = useNavigate();
  return (
    <div>
<h3>Dear <span style={{color: 'red'}}>{sendedMsg.name}</span>, We will call back to your mail {sendedMsg.email} asap</h3>
<p></p>

<p>{sendedMsg.message} </p>
<button onClick={()=>navigate(-1)} >Turn Back</button>
 </div>
  )
}

export default Sended