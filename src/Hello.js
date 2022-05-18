import React, { useState, useEffect } from "react";
//import Button from "react-bootstrap/Button";
//import React from "react-bootstrap/Button";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import axios from 'axios';
export const TemparetureInCelcius =() =>{
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data));
  }, []);
  return (<div>
    <h2>The JSON below is loaded from an external API!</h2>
    <code>{JSON.stringify(users)}</code>
  </div>
);
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