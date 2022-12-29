import React from 'react'

export default function Person({person}) {
  return (
      <div>
        <p>{person.name}</p><p>{person.surname}</p><p>{person.description}</p>
    </div>
  )
}
