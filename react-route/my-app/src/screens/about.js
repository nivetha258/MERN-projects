import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>

        <p>About</p>
        <Outlet></Outlet>
    </div>
  )
}

export default About