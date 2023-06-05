import React from 'react'
import '../App.css';
import logo from "./Images/logo.jpg"
import { Link } from 'react-router-dom'
import Middle from './Middle';
const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand ml-5" href="#">          <img className=" logo rounded-circle" src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse respo_nav navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link">
                <Link className="fw-bolder ml-5  text-white active fs-3" to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <Link className="fw-bolder ml-5 text-white fs-3" to="/colleges">Colleges</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
              <Link className="fw-bolder ml-5 text-white fs-3" to="/exams">Exams</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link className="fw-bolder ml-5 text-white active fs-3" to="/about">About</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* 
      <ul className=" p-3 nav_color nav justify-content-around align-items-center">
        <li className="nav-item">
          <img className=" logo rounded-circle" src={logo} alt="" />
        </li>
        <li className="nav-item">
          <a >
            <Link className="nav-link fw-bolder active" to="/">Home</Link>
          </a>
        </li>
        <li className="nav-item">

          <a>
            <Link >Colleges</Link>
            <ul className="list-group dropdown1">
              <li className="list-group-item" ><Link >IIT</Link></li>
              <li className="list-group-item"><Link >NIT</Link></li>
            </ul>
          </a>

        </li>

        <li className="nav-item">
          <a>
            <Link className="nav-link drp1 fw-bolder" to="/exams">Exams</Link>
            <ul className="list-group dropdown2">
              <li className="list-group-item"><Link>GATE</Link></li>
              <li className="list-group-item"><Link>CSIR-NET</Link></li>
              <li className="list-group-item"><Link>IIT-JAM</Link></li>
              <li className="list-group-item"><Link>TIFR</Link></li>
              <li className="list-group-item"><Link>NIMCET</Link></li>
            </ul>
          </a>
        </li>

        <li className="nav-item">
          <a><Link className="nav-link fw-bolder active" to="/about">About</Link></a>
        </li>

      </ul> */}
      <div class="marquee-w">
        <div class="marquee">
          <span className=' fs-5 pt-2 fw-bolder'>Now boost your IIT preparation with IITians -  IIT-JAM , GATE , TIFR , NIMCET <a className="text-decoration-none text-warning" href="#scrollspyHeading1" >Click to know all Features and Benifits</a></span>
        </div>
        <div class="marquee marquee2">
          <span className=' fs-5  fw-bolder'>Now boost your IIT preparation with IITians -  IIT-JAM , GATE , TIFR , NIMCET <a className="text-decoration-none " href="#">Click to know all Features and Benifits</a></span>
        </div>
      </div>

    </>
  )
}

export default Navbar
