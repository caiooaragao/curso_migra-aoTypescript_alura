import React, { ReactElement } from "react";
import "./ButtonSubmit.css"


interface ButtonProps{
    children:ReactElement
}

function ButtonSubmit(props: ButtonProps){
    return(
        <button >{props.children}</button>
    )
}


export default ButtonSubmit