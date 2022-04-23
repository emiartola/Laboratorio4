import { Component } from "react"
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { DetalleInstrumento } from "./components/DetalleInstrumento";
import {DondeEstamos} from "./components/DondeEstamos";
import Instrumento from "./components/Instrumento";

class AppRutas extends Component{
  
    render(){
      return (
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/instrumento" element={<DetalleInstrumento/>}/>
              <Route path="*" element={<App/>}/>
              <Route path="/DondeEstamos" element={<DondeEstamos/>}/>
            </Routes>
      );
    }
  }
  
  export default AppRutas;
  