import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Person from '../components/Person';


export default function Home() {


    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost/test/axios/people.php')
            .then(function (response) {
                console.log(response)
                setData(response.data)
            })
    }, []); 



    return (
        <>
            <h1>List of people</h1>

            <div className='table'>
                <div >
                    <p>Name</p><p>Surname</p><p>Profesion</p>
                </div>
                {data.map((x) => <Person key={x.id} person={x} />)}
            </div>

        </>

    )
}
