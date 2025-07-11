import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './Components/NavBarEdunova'
import {  Route, Routes } from 'react-router-dom'


function App() {


  return (
    <Container>
      <NavBarEdunova />

     <Routes>
      <Route path={RouteNames.HOME} element={<Pocetna />} />
     </Routes>

    Hello
    </Container>
  )
}

export default App
