import React from 'react';
import {Row} from "react-bootstrap";

const FormInput = props => {

    return (
        <div className={props.className}>
            <label htmlFor={props.label}>{props.label}</label>
            <Row>
                <input style={{width: '300px'}}
                    className="form-input"
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    maxLength={props.maxLength}
                />
                <div>{props.suffix}</div>
            </Row>
        </div>
    )
};

export default FormInput
