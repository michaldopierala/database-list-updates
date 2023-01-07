import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../components/Form';



export default function Update() {

  const [data, setData] = useState([])
  const [id, setId] = useState()
  const [inputs, setInputs] = useState({})


  function myClick(id) {
    setId(id)
    let x = data.findIndex((a) => { return a.id == id });
    setInputs({
      id: data[x].id,
      name: data[x].name,
      surname: data[x].surname,
      profesion: data[x].description
    })
  }

  function handleSubmit(e){
    console.log('handleSubmit')
    e.preventDefault();
    axios.post('http://localhost/test/axios/people_update.php', { inputs })
    .then(function (response) {
      console.log(response.data);
      setId(null)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function handleChange(e){
    console.log(e.target.name)

    console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }


useEffect(() => {
  axios.get('http://localhost/test/axios/people.php')
    .then(function (response) {
      setData(response.data)
    })
}, [id]);


return (
  <div className='update'>
    <div className='first'>
      <div className='tableHead'><p>Name</p><p>Surname</p><p>Job</p></div>

      {data ?
        data.map((x) => <button key={x.id} onClick={() => myClick(x.id)} style={id == x.id ? { border: "solid 2px black" } : { border: "none" }}  >     <p>{x.name}</p>  <p>{x.surname}</p><p>{x.description}</p> </button>)
        :
        'no data'}

    </div>


    <div className='second'>
      {id ?  <Form inputs={inputs} handleSubmit={handleSubmit} handleChange={handleChange} />: "Please select your item"}
     
    </div>


  </div>


)
}
