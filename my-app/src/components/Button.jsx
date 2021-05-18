import React from 'react'

function Button(props){

    return ( <button name="buttonvalue" value={props.value} onClick={props.buttonhandleClick} > {props.value} </button> )
}

export default Button;