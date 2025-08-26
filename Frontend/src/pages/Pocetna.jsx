import { Container } from "react-bootstrap";
import SLIKA from '../assets/slika.png'; 

export default function Pocetna(){
    return(
        <Container className="app">
            
            <img className="slika" src={SLIKA} />
        </Container>
       
    )
}