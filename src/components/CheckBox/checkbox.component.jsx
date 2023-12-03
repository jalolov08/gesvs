import React from 'react'
import styled from 'styled-components'

const CheckBoxContainer = styled.div`
 display: flex;
 align-items: center;
 margin:1.8em 0em ;

 label {
    font-size: 0.625em;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;   
 }

 input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
 }

 label::before {
    font-size: 1.2em;
    content: "";
    border: 1px solid #C4C4C4;
    height: 1.2em;
    width: 1.2em;     
    margin-right: 0.5em;
 }

 input:checked {
    & + label::before {
      content: "\\002714";
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input:focus {
      & + label::before {
        box-shadow: 0px 0px 20px black;
      }
    }
 }
`

export default function CheckBox({ text, linkText, linkHref, value, onChange, id }) {
    return (
        <CheckBoxContainer>
            <input type='checkbox' id={id} value={value} onChange={onChange} />
            <label htmlFor={id} >
                <div>
                    <span>{text}</span>
                    <a style={{ color: "#605BE5", textDecoration: "none" }} href={linkHref}>{linkText}</a>
                    <span style={{ color: "red" }}> *</span>
                </div>
            </label>
        </CheckBoxContainer>
    )
}