// import { useEffect, useState } from 'react';
// import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { getInstrumentoXId } from './FuncionesApi';
// import Instrumento from './Instrumento';
// import { Navigation } from './Navigation';



// export const DetalleInstrumento = () => {
//     const {idinstrumento} = useParams();
//     const [instrumento, setInstrumento] = useState<Instrumento>();

//     let instrumentoId:number = 0;

//     const getInstrumentoResto = () => {
//       let instrumentoSelect:Instrumento = getInstrumentoXId(instrumentoId);
//       setInstrumento(instrumentoSelect);
//     }

//     useEffect(() => {
//         if(idinstrumento){
//             instrumentoId = parseInt(idinstrumento);
//         }
//         getInstrumentoResto();
//     }, []);

//     // return (
//     //     <>
//     //       <div className="container">
//     //       <Navigation></Navigation>
//     //         <div className="row">
//     //           <div className="col-lg-8">
//     //             <img
//     //                 alt="instrumento"
//     //                 className="card-img"

//     //               src={"http://localhost:3000/images/"+instrumento?.imagen}/>

//     //             <p>Descripción :
//     //             {instrumento?.descripcion}
//     //             </p>

//     //           </div>
//     //           <div className="col-lg-4 mt-3">
//     //             <p>{instrumento?.cantidadVendida} Vendidos</p>
//     //             <h2>{instrumento?.instrumento}</h2>
//     //             <h2 className="mt-5">${instrumento?.precio}</h2>
//     //             <h5>Marca : {instrumento?.marca}</h5>
//     //             <h5>Modelo : {instrumento?.modelo}</h5>
//     //             {instrumento?.costoEnvio === "G" ? (
//     //               <h5 style={{ color: "green" }}>
//     //                 {" "}
//     //                 <img src={`images/camion.png`} alt="envioIcon" />
//     //                 Envio Gratis
//     //               </h5>
//     //             ) : (
//     //               <h5 style={{ color: "orange" }}>
//     //                 Costo Envio Interior De Argentina ${instrumento?.costoEnvio}
//     //               </h5>
//     //             )}
//     //             <button className="btn btn-outline-primary mt-5">
//     //               Agregar Al Carrito
//     //             </button>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </>
//     //   );
//     // };

//     
import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getInstrumentoXId } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from './Navigation';


export const DetalleInstrumento = () => {
    const { idinstrumento } = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>();

    let instrumentoId: number = 0;

    const getInstrumentoResto = () => {
        let instrumentoSelect: Instrumento = getInstrumentoXId(instrumentoId);
        setInstrumento(instrumentoSelect);
    }

    useEffect(() => {
        if (idinstrumento) {
            instrumentoId = parseInt(idinstrumento);
        }
        getInstrumentoResto();
    }, []);
    
    return (
                <>
                <Navigation></Navigation>
                <Container>
                        <Row> 
                        <Col><br/><img alt="instrumento" className="minAltoImg" src={"http://localhost:3000/images/"+instrumento?.imagen}  /></Col>
                            <Col>
                                <Row>
                                    <Col><h1>{instrumento?.marca}</h1></Col>
                                </Row>
                                <Row>
                                <Col>Precio: <h2>${instrumento?.precio}</h2></Col>
                                </Row>
                                <Row>
                                    <Col>Descripción: <h2>{instrumento?.descripcion}</h2></Col>
                                </Row>
        
                            </Col>
                        </Row>
        
                        <Row>
                            <Col><Nav.Link href="/"><h3>Volver</h3></Nav.Link></Col>
                        </Row>                
                        </Container>
                </>
            )
        }
//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8">
//                         <img
//                             style={{ maxWidth: "400px", maxHeight: "400px" }}
//                             src={`images/${instrumento?.imagen}`}
//                             alt="instData"
//                             className="card-img"
//                         />
//                         <p>Descripción :</p>
//                         <p>{instrumento?.descripcion}</p>
//                     </div>
//                     <div className="col-lg-4 mt-3">
//                         <p>{instrumento?.cantidadVendida} Vendidos</p>
//                         <h2>{instrumento?.instrumento}</h2>
//                         <h2 className="mt-5">${instrumento?.precio}</h2>
//                         <h5>Marca : {instrumento?.marca}</h5>
//                         <h5>Modelo : {instrumento?.modelo}</h5>
//                         {instrumento?.costoEnvio === "G" ? (
//                             <h5 style={{ color: "green" }}>
//                                 {" "}
//                                 <img src={`../assets/img/camion.png`} alt="envioIcon" />
//                                 Envio Gratis A Todo El Pais
//                             </h5>
//                         ) : (
//                             <h5 style={{ color: "orange" }}>
//                                 Costo Envio Interior De Argentina ${instrumento?.precio}
//                             </h5>
//                         )}
//                         <button className="btn btn-outline-primary mt-5">
//                             Agregar Al Carrito
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };