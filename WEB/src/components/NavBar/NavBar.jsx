import './NavBar.css'
import banner from '../../assets/logo/background.JPG'
import placa from '../../assets/logo/placa.png'
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        <>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <a className="nav-link active " aria-current="page" href="/releases">NOTICIAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/participantes">PARTICIPANTES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href='/prensa'>PRENSA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href='/contacto'>CONTACTO</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link fw-bold" href="/spectators">PÚBLICO</a>
                            </li>
                            <li className="nav-item d-flex">
                                <p className="nav-link " href='/seguridad'>SEGURIDAD</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Link to='/'>
                <div className='header'>
                    <section id='banner'>
                        <img className='img1' src={banner} alt={banner} />
                        <img className='img2' src={placa} alt={placa} />
                    </section>
                </div>
            </Link>
        </>
    )
}

export default NavBar