// import { useEffect, useState } from 'react';
// import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { getInstrumentoXId } from './FuncionesApi';
// import Instrumento from './Instrumento';
// import { Navigation } from './Navigation';



import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getInstrumentoXId } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from './Navigation';


export const DetalleInstrumento = () => {
    const { idInstrumento } = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>();

    let instrumentoId: number = 0;

    const getInstrumentoResto = () => {
        let instrumentoSelect: Instrumento = getInstrumentoXId(instrumentoId);
        setInstrumento(instrumentoSelect);
    }

    useEffect(() => {
        if (idInstrumento) {
            instrumentoId = parseInt(idInstrumento);
        }
        getInstrumentoResto();
    }, []);

    // 

    return (
        <>
        <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <img
                            style={{ maxWidth: "400px", maxHeight: "400px" }}
                            src={"http://localhost:3000/images/" + instrumento?.imagen}
                            alt="instrumento"
                            className="card-img"
                        />
                        <p>Descripción :</p>
                        <p>{instrumento?.descripcion}</p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <p>{instrumento?.cantidadVendida} Vendidos</p>
                        <h2>{instrumento?.instrumento}</h2>
                        <h2 className="mt-5">${instrumento?.precio}</h2>
                        <h5>Marca : {instrumento?.marca}</h5>
                        <h5>Modelo : {instrumento?.modelo}</h5>

                        Costo Envío:
                        {instrumento?.costoEnvio === "G" ? (
                            <h5 style={{ color: "green" }}>
                                Envío gratis
                            </h5>
                        ) : (
                            <h5 style={{ color: "orange" }}>
                                 ${instrumento?.costoEnvio}
                            </h5>
                        )}
                        <button className="btn btn-outline-primary mt-5">
                            Agregar Al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};