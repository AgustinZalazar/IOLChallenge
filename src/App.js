import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CharacterContext } from './context/characterContext'
import { Card } from './components/card/card.js'
import { Button } from './components/button/button'
import { Link } from "react-router-dom";
import './App.css';


function App() {
  const { favCharacters } = useContext(CharacterContext)
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [filterValue, setFilterValue] = useState("")
  const baseURL = 'https://rickandmortyapi.com/api/character/?page=0'

  const fetchCharacters  = (url) => {
      axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handlePrevPage = () => {
    fetchCharacters(info.prev);
  }
  const handleNextPage = () => {
    fetchCharacters(info.next);
  }
  const handleFilter = e => {
    setFilterValue(e.target.value)
    filterName(e.target.value)
    console.log(filterValue)
  }
  const filterName = (value) => {
    var arrayFiltered = characters.filter((item) => {
      if (item.name.toLowerCase().includes(value.toLowerCase())) return item
    })
    setCharacters(arrayFiltered)
  }
  useEffect(() => {
    fetchCharacters(baseURL);
  }, [])
  
  return (
    <div className='container'>
    {!loading&&
        <>
          <div className='banner'>
            <h1>IOL Challenge</h1>
          </div>
          <input type='text' value={filterValue} onChange={handleFilter} className='search-bar' placeholder='Busca por nombre' />
          {favCharacters.length > 0 &&
             <Link to="/favorites"><Button text={`Ver favoritos`}/></Link>
          }
          <div className="cards-container">
            {
              characters.map((item, index)=> {
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
          <div className='buttons'>
            {info.prev&&
              <Button func={handlePrevPage} text={`Anterior`} />
            }
            {info.next&&
              <Button func={handleNextPage} text={`Siguiente`} pagNext={true}/>
            } 
          </div>
      </>
    }
    
    </div>
  );
}

export default App;
