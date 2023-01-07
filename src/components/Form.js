import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios';



export default function Form(props) {

    // let x = props.data.findIndex((a) => { return a.id == props.id });




    

    



    return (
        <>

            <form onSubmit={props.handleSubmit}>
                <label>Enter Name:
                    <br />
                    <input type="text"
                        name="name"
                        value={props.inputs.name || ""}
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label>Enter Surname:
                    <br />
                    <input type="text"
                        name="surname"
                        value={props.inputs.surname || ""}
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label>Enter Profesion:
                    <br />
                    <input type="text"
                        name="profesion"
                        value={props.inputs.profesion || ""}
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="submit" />
            </form>

        </>
    )
}


