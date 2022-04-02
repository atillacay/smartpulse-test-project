import React from 'react'
import smartPulseLogo from '../smartpulse-logo-12.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-inline">
        <a className="navbar-brand" href="##">
          <img className="logo" src={smartPulseLogo} alt="" />
        </a>
        <h1>Test Project</h1>
      </div>
    </nav>
  );
}

export default Navbar