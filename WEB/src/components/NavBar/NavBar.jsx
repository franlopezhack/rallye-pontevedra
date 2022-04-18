import './NavBar.css'
import banner from '../../assets/logo/background.JPG'
import placa from '../../assets/logo/placa.png'
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        <>

            <nav className="navbar shadow navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <Link to='/release'>
                                <li className="nav-item ">
                                    <p className="nav-link active " aria-current="page">NOTICIAS</p>
                                </li>
                            </Link>
                            <Link></Link>
                            <li className="nav-item">
                                <p className="nav-link" href="/participantes">PARTICIPANTES</p>
                            </li>
                            <Link>
                                <li className="nav-item">
                                    <p className="nav-link " href='/prensa'>PRENSA</p>
                                </li>
                            </Link>
                            <Link>
                                <li className="nav-item">
                                    <p className="nav-link " href='/contacto'>CONTACTO</p>
                                </li>
                            </Link>
                            <Link>
                                <li className="nav-item ">
                                    <p className="nav-link fw-bold" href="/spectators">PÚBLICO</p>
                                </li>
                            </Link>
                            <Link>
                                <li className="nav-item d-flex">
                                    <p className="nav-link " href='/seguridad'>SEGURIDAD</p>
                                </li>
                            </Link>
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