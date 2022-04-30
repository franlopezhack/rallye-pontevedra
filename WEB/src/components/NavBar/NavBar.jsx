import './NavBar.css'
import placa from '../../assets/logo/placa.png'
// import banner from '../../assets/logo/banner.JPG'
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        <>
        <div className='nav-home mb-1'>
        <nav className="d-flex text-align-center navbar shadow navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <Link to='/noticias' style={{ textDecoration: 'none' }}>
                                <li className="nav-item ">
                                    <p className="nav-link active " aria-current="page">NOTICIAS</p>
                                </li>
                            </Link>
                            <Link to='/participantes' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <p className="nav-link" >PARTICIPANTES</p>
                                </li>
                            </Link>
                            <Link to='/prensa' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <p className="nav-link ">PRENSA</p>
                                </li>
                            </Link>
                            <Link to='/contacto' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <p className="nav-link " href='/contacto'>CONTACTO</p>
                                </li>
                            </Link>
                            <Link to='/espectadores' style={{ textDecoration: 'none' }}>
                                <li className="nav-item ">
                                    <p className="nav-link" href="/spectators">PÚBLICO</p>
                                </li>
                            </Link>
                            <Link to='/seguridad' style={{ textDecoration: 'none' }}>
                                <li className="nav-item ">
                                    <p className="nav-link ">SEGURIDAD</p>
                                </li>
                            </Link>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li className='nav-item d-flex justify-content-end'>
                                    <img src={placa} alt="" />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            
            {/* <Link to='/'>
                <div className='header'>
                    <section id='banner'>
                        <img className='img1' src={banner} alt={banner} />
                        <img className='img2' src={placa} alt={placa} />
                    </section>
                </div>
            </Link> */}
        </>
    )
}
export default NavBar