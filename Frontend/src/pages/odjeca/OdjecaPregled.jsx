import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import OdjecaService from "../../services/OdjecaService";
import { NumericFormat } from "react-number-format";



export default function OdjecaPregled(){

    const[odjece, setOdjece] = useState([]);


    async function dohvatiOdjecu() {
       const odgovor = await OdjecaService.get()
       setOdjece(odgovor)
    }

    // hooks (kuka) se izvodi prilikom dolaska na stranicu Odjecaovi
    // ovo "glumi" konstruktor u OOP
    useEffect(()=>{
        dohvatiOdjecu();
    },[])


    return(
        <>
        Tablični Pregled odjeće
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Cijena</th>
                    <th>Veličina</th>
                    <th>Opis</th>
                    <th>Stanje</th>

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
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}