import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Form from '../components/Form';

export default function Update() {

  const [id, setId] = useState();
  const [data, setData] = useState([]);
  let count = 0;


  function pressFunction(a) {
    // console.log(a)
    // console.log(typeof id);
    setId(a)
  }

  useEffect(() => {
    axios.get('http://localhost/test/axios/people.php')
      .then(function (response) {
        console.log(response)
        setData(response.data)
      })
  }, []);




  return (
    <div className='update_tb'>
      <div className='first'>

        <div className='table_2'>
          <div >
            <p>Name</p><p>Surname</p><p>Profesion</p>
          </div>
          {data.map((x) => <button key={x.id} onClick={() => pressFunction(x.id)}> <p>{x.name}</p><p>{x.surname}</p><p>{x.description}</p></button>)}
        </div>

      </div>
      <div>
        {id ? <Form id={id} data={data} />: "Please select row" }
        {/* <Form id={id} data={data} /> */}
      </div>
    </div>
  )
}
