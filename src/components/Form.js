import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios';






export default function Form(props) {

    let x = props.data.findIndex((a) => { return a.id == props.id });


    const [inputs, setInputs] = useState({})
    useEffect(() => {
        setInputs({
            id: props.id,
            name: props.data[x].name,
            surname: props.data[x].surname,
            profesion: props.data[x].description
        })
    }, [x]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(inputs)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/test/axios/people_update.php', { inputs })
            .then(function (response) {
                console.log(response.data);

                // console.log("hello world ");
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>Enter Name:
                    <br />
                    <input type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter Surname:
                    <br />
                    <input type="text"
                        name="surname"
                        value={inputs.surname || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter Profesion:
                    <br />
                    <input type="text"
                        name="profesion"
                        value={inputs.profesion || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="submit" />
            </form>

        </>
    )
}
