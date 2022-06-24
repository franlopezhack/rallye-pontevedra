import './BulletinBoard.css'
import anuncios from '../../assets/images/BulletinBoard/anuncios.png'
import espectador from '../../assets/images/BulletinBoard/espectador.png'
import tiempos from '../../assets/images/BulletinBoard/tiempos.png'
import revista from '../../assets/Pdfs/REVISTA V6.pdf'
import {Link} from 'react-router-dom'


function BulletinBoard() {
    return (
        <div className='bulletin-board '>
            <article className=''>
                <Link to='/participantes' >
                    <img src={anuncios} alt={anuncios} />
                </Link>
                <h5 className='text-center fw-bold fs-100'>Información participantes</h5>
            </article>

            <article>
                <a href={revista} className=''>
                    <img src={espectador} alt={espectador} />
                </a>
                <h5 className='text-center fw-bold fs-100'>Guia del expectador</h5>
            </article>

            <article>
                <a target='_blank' rel="noreferrer" href='http://temposfga.es/' className=''>
                    <img src={tiempos} alt={tiempos} />
                </a>
                <h5 className='text-center fw-bold fs-100'>Tiempos en directo</h5>
            </article>

        </div>
    )
}

export default BulletinBoard