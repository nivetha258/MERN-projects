import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (

    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"lightBlue",padding:"0 10px"}}>
        <div>
            <h3>React-App</h3>
        </div>
        <div >
            <p style={{padding:"0 10px"}}><Link to={"/home"}>Home</Link></p>
            <p style={{padding:"0 10px"}}><Link to={"/about"}>ABOUT</Link></p>
            <p style={{padding:"0 10px"}}><Link to={"/about/contact"}>CONTACT</Link></p>

        </div>

    </div>
  )
}

export default navbar