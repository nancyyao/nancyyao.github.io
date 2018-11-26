import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap, Button } from 'react-bootstrap';

const buttonStyle = {
  color: '#87c3b9',
  textAlign: 'left',
  padding: '12px'
}

const BackButton = (props) => (
    <div style={buttonStyle}>
      <Link to="/"><Button>Back</Button></Link>
    </div>
);

export default BackButton;
