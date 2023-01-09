import React from 'react'
import {useNavigate} from "react-router-dom"


export default function Modal({ open, close }) {
  const navigate = useNavigate()

  if (!open) return null
  return (
    <div className='modalPost'>

      <div className='window'>
        <div>Inputs added sussesfully to database</div>
        <div className='buttons'>
          <button onClick={()=>navigate("/")}>  Home </button>
          <button onClick={close}> Close </button>
        </div>
      </div>
    </div>
  )
}
