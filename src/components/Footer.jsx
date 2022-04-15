import React from 'react'
import logo from "../img/clarusway_logo.png"

const Footer = () => {
  return (
    <div>
    <footer className="dark">
        <a href="https://www.clarusway.com" target="_blank" rel="noreferrer">Clarusway Web Design, Copyright © 2022<br />
        <img src={logo} alt=""/></a>
    </footer>
    </div>
  )
}

export default Footer