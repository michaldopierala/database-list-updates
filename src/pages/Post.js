import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function Post() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('read dat')

    axios.post('http://localhost/test/people_post.php', { inputs  })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter name:
        <br />
        <input
          type="text"
          name="name"
          // value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Enter surname:
        <br />
        <input
          type="text"
          name="surname"
          // value={inputs.username || ""} 
          onChange={handleChange}
        // onChange={(e) => setInputs(e.target.value)}
        />
      </label>
      <br />
      <label>Enter Profesion:
        <br />
        <input
          type="text"
          name="profesion"
          // value={inputs.username || ""} 
          onChange={handleChange}
        // onChange={(e) => setInputs(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="submit" />
    </form>
  )
}
