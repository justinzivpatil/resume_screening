import React from 'react'
import logo from "./logo.jpeg"


export default function Header() {
  return (
    <div>
      <div className="header">
            <img src={logo} alt="Logo"/>
        </div>
        <div className="link">
      <a href="/"><i className="fas fa-sign-out-alt"></i></a>
      <a href="/"><i className="fas fa-home"></i></a>
      <a href="/"><i className="fas fa-arrow-circle-left"></i> Logout</a>
    </div>

        <div className="card">
            <center>
            <h1>CV Screening</h1>
        </center>
        </div>
    </div>
  )
}
