import React from 'react'
import { useState, useEffect } from 'react';

// Exemple d'utilisation d'un api sans librairie

const ApiVanilla = () => {

  const [data, setData] = useState([]) // un array vide qui sera rempli par l'api

  const getPeople = async () => {

    try{
      const url = 'https://swapi.dev/api/people'

      const response = await fetch(url)

      if(!response.ok) throw new Error()

      const people = await response.json()

      console.log('ApiVanilla',people)

      setData(people.results)

    } catch(err){

      console.log(err)
    }
  }

  useEffect ( () => getPeople(), [])

  return (
    <div>ApiVanilla</div>
  )
}

export default ApiVanilla