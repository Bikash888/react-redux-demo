import React from 'react';
import './CounterController.css';

const counterControl = (props) => (
    <div className="Control" onClick={props.clicked}>
        {props.label}
    </div>
);
export default counterControl;