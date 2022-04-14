import './BulletinBoard.css'
import anuncios from '../../assets/images/BulletinBoard/anuncios.png'
import espectador from '../../assets/images/BulletinBoard/espectador.png'
import tiempos from '../../assets/images/BulletinBoard/tiempos.png'
import { Link } from "react-router-dom";

function BulletinBoard() {
    return (
        <div className='bulletin-board d-flex flex-wrap justify-content-center'>
            <Link to='/anuncios'>
                <article className='mb-2 m-1'>
                    <img src={anuncios} alt="" />
                </article>
            </Link>
            <article className='mb-2 m-1'>
                <img src={espectador} alt="" />
            </article>
            <article className='mb-2 m-1'>
                <img src={tiempos} alt="" />
            </article>
        </div>
    )
}

export default BulletinBoard