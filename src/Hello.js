import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
//import React from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const TemparetureInCelcius =() =>{
  
  return (<Container>
  <Row>
    <Col sm={32}>sm=8</Col>
    <Col sm={0}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>)
}

const Hello = () => {
    
    const [temp, setTemp] = useState(0);

    
    useEffect(() => {
      setTemp(temp+1);
      console.log("useEffect");
        
    },[]);
    return (<div><h2>It is {temp}.</h2></div>)

}

export default Hello;