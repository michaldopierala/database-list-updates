import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Delete() {

  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    axios.get('http://localhost/test/axios/people.php')
      .then(function (response) {
        console.log(response)
        setData(response.data)
      })
  }, [update])



  const handleClick = (id) => {
    axios.post('http://localhost/test/axios/people_delete.php', { id: id })
      .then(function (response) {
        setUpdate(id)
      })
  };


  return (
    <>
      <div>Delete</div>
      <div className='table'>
        <div >
          <p>Name</p><p>Surname</p><p>Profesion</p><p>Button</p>
        </div>
        {data.map((x) => <div key={x.id}>
          <p>{x.name}</p>4
          <p>{x.surname}</p>
          <p>{x.description}</p>
          <button onClick={() => { handleClick(x.id) }} >Delete</button>
        </div>)}

      </div>
    </>


  )
}
