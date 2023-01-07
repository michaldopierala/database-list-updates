import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Person from '../components/Person';


export default function Home() {


    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost/test/axios/project1.php')
            .then(function (response) {
                console.log(response)
                setData(response.data)
            })
    }, []);



    return (
        <div className='home'>
            <h1>List of people</h1>

            <div className='table'>
                <div >
                    <p>Name</p><p>Surname</p><p>Profesion</p>
                </div>
                {/* <div className='test'> */}
                    {data.map((x) => <Person key={x.id} person={x} />)}
                {/* </div> */}
            </div>

        </div>

    )
}
