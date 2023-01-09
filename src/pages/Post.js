import React from 'react'
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import axios from 'axios';



export default function Post() {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = useState(false)
  // const [shopCart, setShopCart] = useState({})
  // setInputs({'x':"e"})    
  // let updatedValue = {"item1":"juice"};
  // setShopCart(shopCart => ({
  //       ...shopCart,
  //       ...updatedValue
  //     }));

//   let updatedValue = {};
// updatedValue = {item1:"juice"};
// setShopCart(shopCart => ({
//           ...shopCart,
//           ...updatedValue
//         }));

  // console.log(inputs)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('read dat')

    axios.post('http://localhost/test/axios/project1.php', { inputs  })
      .then(function (response) {
        setOpen(true)
        setInputs(values => {return{ ...values, name: null, surname: null, profesion: null }}) 
            console.log('zonk')
            console.log(inputs)

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(inputs)

  return (
    <>
      <form className='post' onSubmit={handleSubmit}>
      <label>Enter name:
        <br />
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Enter surname:
        <br />
        <input
          type="text"
          name="surname"
          value={inputs.surname || ""} 
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
          value={inputs.profesion || ""} 
          onChange={handleChange}
        // onChange={(e) => setInputs(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
    <Modal open={open} close={()=>setOpen(false)}/>
    
    </>

    
  )
}
