import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './Components/NavBarEdunova'
import {  Route, Routes } from 'react-router-dom'
import Pocetna from './pages/Pocetna'
import { RouteNames } from './constants'
import OdjecaPregled from './pages/odjeca/OdjecaPregled'
import OdjecaDodaj from './pages/odjeca/OdjecaDodaj'
import OdjecaPromjena from './pages/odjeca/OdjecaPromjena'



function App() {


  return (
    <Container>
      <NavBarEdunova />

     <Routes>
      <Route path={RouteNames.HOME} element={<Pocetna />} />

      <Route path={RouteNames.ODJECA_PREGLED} element={<OdjecaPregled/>} />
      <Route path={RouteNames.ODJECA_NOVA} element={<OdjecaDodaj/>} />
      <Route path={RouteNames.ODJECA_PROMJENA} element={<OdjecaPromjena/>} />
     </Routes>
      <hr />
      &copy; Edunova
      
    </Container>
  )
}

export default App
