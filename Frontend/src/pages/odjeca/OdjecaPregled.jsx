import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import OdjecaService from "../../services/OdjecaService";
import { NumericFormat } from "react-number-format";
import { RouteNames } from "../../constants";
import { Link, Navigate, useNavigate } from "react-router-dom";



export default function OdjecaPregled(){

    const[odjece, setOdjece] = useState([]);
    const navigate= useNavigate();

    async function dohvatiOdjecu() {
       const odgovor = await OdjecaService.get()
       setOdjece(odgovor)
    }

    // hooks (kuka) se izvodi prilikom dolaska na stranicu Odjecaovi
    // ovo "glumi" konstruktor u OOP
    useEffect(()=>{
        dohvatiOdjecu();
    },[])
      
    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return;
        }
        brisanje(sifra)
    }

    async function brisanje(sifra) {
        const odgovor = await OdjecaService.obrisi(sifra);
        dohvatiOdjecu();
    }


    return(
        <>
        

       <Link
       className="btn btn-success"
       to={RouteNames.ODJECA_NOVA} >Dodavanje nove odjece</Link>

        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Cijena</th>
                    <th>Veličina</th>
                    <th>Opis</th>
                    <th>Stanje</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {odjece && odjece.map((odjeca,index)=>(
                    <tr key={index}>
                        <td>{odjeca.naziv}</td>
                        <td className="desno">
                            <NumericFormat 
                            value={odjeca.cijena}
                            displayType={'text'}
                            thousandSeparator='.'
                            decimalSeparator=','
                            suffix={' €'}
                            decimalScale={2}
                            fixedDecimalScale
                            />
                        </td>
                        <td>
                            {
                            odjeca.velicina
                            }

                        </td>
                        <td>
                            {odjeca.opis}
                        </td>
                        <td>
                           {odjeca.stanje}
                        </td>
                        <td>
                             <Button
                            onClick={()=>navigate(`/odjeca/${odjeca.sifra}`)}>
                            Promjena
                            </Button>   
                           &nbsp; &nbsp; &nbsp;


                            <Button variant="danger"
                            onClick={()=>obrisi(odjeca.sifra)}>
                                Obriši
                            </Button>                        
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}