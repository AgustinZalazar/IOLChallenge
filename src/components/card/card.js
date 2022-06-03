import './cards_style.css'
import { Link } from "react-router-dom";
import { Button } from '../button/button'

export const Card = ({name , img, id, status}) => {
  return (
    <div className='card'>
        <img src={img} alt="character" className='img-character'/>
        <div className='info'>
            <h1>{name}</h1>
            <p className={status === "Alive"? 'alive' : 'diffStatus'}>{status}</p>
            <Link to={`/detalle/${id}`}><Button text={'Info'} icon={"fa-solid fa-plus"}/></Link>
        </div>
    </div>
  )
}
