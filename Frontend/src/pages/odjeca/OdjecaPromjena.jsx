import { Button, Col, Form, Row } from "react-bootstrap";
import { RouteNames } from "../../constants";
import OdjecaService from "../../services/OdjecaService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OdjecaPromjena(){
   const navigate = useNavigate();
   const params = useParams();
   const[odjeca,setOdjeca] = useState({})

   async function ucitajOdjeca(){
        const odgovor = await OdjecaService.getBySifra(params.sifra);
       setOdjeca(odgovor);

    }

    async function promjena(sifra,odjeca){
        const odgovor = await OdjecaService.promjeni(sifra,odjeca);
       navigate(RouteNames.ODJECA_PREGLED);

    }
     useEffect(()=>{
    ucitajOdjeca()


   },[])

    


    function odradiSubmit(e){ //e je event
        e.preventDefault();

        let podaci = new FormData(e.target); // dohvaćamo sve podatke iz forme

        promjena(
            params.sifra,
            {
            naziv: podaci.get('naziv'),
            cijena: parseFloat(podaci.get('cijena')),
            velicina: podaci.get('velicina'),
            opis: podaci.get('opis'),
            stanje: podaci.get('stanje')
            }
        )


    }
    return (
        <> 
        Dodavanje odjece
        <Form onSubmit={odradiSubmit}>

             <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required defaultValue={odjeca.naziv} />
            </Form.Group>
            

            <Form.Group controlId="cijena">
                <Form.Label>Cijena</Form.Label>
                <Form.Control type="number" name="cijena" required defaultValue={odjeca.cijena} />
            </Form.Group>

            <Form.Group controlId="velicina">
                <Form.Label>Velicina</Form.Label>
                <Form.Control type="text" name="velicina" required  defaultValue={odjeca.velicina}/>
            </Form.Group>

            <Form.Group controlId="opis">
                <Form.Label>Opis</Form.Label>
                <Form.Control type="text" name="opis" required  defaultValue={odjeca.opis}/>
            </Form.Group>

            <Form.Group controlId="stanje">
                <Form.Label>Stanje</Form.Label>
                <Form.Control type="text" name="stanje" required  defaultValue={odjeca.stanje}/>
            </Form.Group>
        
           <Row>
          <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
            <Link to={RouteNames.ODJECA_PREGLED}
            className="btn btn-danger">Odustani</Link>
                    
                </Col>
                <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                    <Button variant="success" type="submit">
                    Promjeni Odjecu
                    </Button>
                    </Col>
           </Row>



        
        </Form></>
        


    
    )
}