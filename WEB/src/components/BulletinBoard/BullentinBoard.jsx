import './BulletinBoard.css'
import anuncios from '../../assets/images/BulletinBoard/anuncios.png'
import espectador from '../../assets/images/BulletinBoard/espectador.png'
import tiempos from '../../assets/images/BulletinBoard/tiempos.png'
import { Link } from "react-router-dom";

function BulletinBoard() {
    return (
        <div className='bulletin-board '>
            <Link to='/anuncios'>
                <article className='m-1'>
                    <img src={anuncios}  alt={anuncios} />
                </article>
            </Link>
          
            <a href='/' className='m-1'>
                <img src={espectador} alt={espectador} />
            </a>
         
            
            <a href='http://temposfga.es/' className='m-1'>
                <img src={tiempos} alt={tiempos} />
            </a>
        </div>
    )
}

export default BulletinBoard