import React, { useContext } from 'react'
import { Card } from '../../components/card/card'
import { Button } from '../../components/button/button'
import { Link } from "react-router-dom";
import { CharacterContext } from '../../context/characterContext'
import './favorites.css'

export const Favorites = () => {
  const { favCharacters } = useContext(CharacterContext)
  return (
    <div className='container_favs'>
        <h1 className='favorites_title'>Personajes Favoritos</h1>
        <div className="cards-container_favs">
            {
              favCharacters.map((item, index)=> {
                return(
                  <Card 
                    name={item.name} 
                    key={index} 
                    img={item.image} 
                    id={item.id} 
                    status={item.status} 
                  />
                )
              })
            }
        </div>
        <Link to='/'><Button text='Volver' /></Link>
    </div>
  )
}
