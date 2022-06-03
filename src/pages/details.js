import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { CharacterContext } from '../context/characterContext'
import { Link } from "react-router-dom";
import { Button } from '../components/button/button'
import './details.css'

export const Details = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const { favCharacters ,setFavCharacters } = useContext(CharacterContext)
  const fetchCharacters  = (url) => {
    axios
    .get(url)
    .then((data) => {
      setDetail(data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchCharacters(`https://rickandmortyapi.com/api/character/${id}`);
  }, [])
  const handleFavCharacter = () => {
    setFavCharacters([...favCharacters, detail])
  }
  return (
    <div className='container_details'>
        {!loading&&
            <div className='card_details'>
                <img src={detail.image} alt='character'/>
                <div className='card_info'>   
                    <h2>{detail.name}</h2>
                    <p>Estado: {detail.status}</p>
                    <p>Especie: {detail.species}</p>
                    <p>Genero: {detail.gender}</p>
                    <p>Origen: {detail.origin.name}</p>
                    <p>Locacion: {detail.location.name}</p>
                    <div className='buttons_details'> 
                      <Button text={'Añadir a favoritos'} func={handleFavCharacter} />
                      <Link to='/' className='margin_left_auto'><Button text={'Volver'}/></Link>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}
