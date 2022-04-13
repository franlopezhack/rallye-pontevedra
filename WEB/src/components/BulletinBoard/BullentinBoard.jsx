import './BulletinBoard.css'
import anuncios from '../../assets/images/BulletinBoard/anuncios.png'
import espectador from '../../assets/images/BulletinBoard/espectador.png'
import tiempos from '../../assets/images/BulletinBoard/tiempos.png'
import { Link} from "react-router-dom";

function BulletinBoard() {
    return (
        <div className='bulletin-board'>
            <div className="bulletin-board-img d-flex flex-column mt-1 me-1 ">

                <Link to={'/anuncios'}>
                    <img className='mt-1 rounded-2' src={anuncios} alt={anuncios} />
                </Link>


                <img className='mt-3 rounded-2' src={tiempos} alt={tiempos} />

                <img className='mt-3 rounded-2' src={espectador} alt={espectador} />

            </div>
        </div>
    )
}

export default BulletinBoard