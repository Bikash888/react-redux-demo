import React from 'react';
import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="Output">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;