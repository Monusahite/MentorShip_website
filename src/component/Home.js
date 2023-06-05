import logo from './Images/logo.jpg';
import '../App.css';
import {Routes,Route } from "react-router-dom"
import About from "./Navbar/About"
import Colleges from "./Navbar/Colleges"
import Exams from "./Navbar/Exams"
import Navbar from "./Navbar"
import Middle from './Middle';

function Home() {
  return (
    <>
    <div className="App">
       <Navbar/>
          <Routes>
             <Route path='/about' element={<About/>}/>
             <Route path='/colleges' element={<Colleges/>}/>
             <Route path='/exams' element={<Exams/>}/>
          </Routes>
    </div>
    <Middle/>
    </>
  );
}

export default Home;
