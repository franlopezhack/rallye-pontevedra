import './NavBar.css'
// import placa from '../../assets/logo/placa.png'

function NavBar() {
    return (
        <>
            <div className="bar mb-1">
                <div>
                    <div className='image-bg d-flex justify-content-center mt-1 mb-1'>
                    </div>
                   
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="nav-link btn btn" aria-current="page" href="#">PRESENTACION</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn" href="#">NOTICIAS</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn" href="#">PARTICIPANTES</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn" href="#">PÚBLICO</button>
                                </li><li className="nav-item">
                                    <button className="nav-link btn btn" href="#">PRENSA</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn" href="#">ENLACES</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn btn-danger" href="#">SEGURIDAD</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default NavBar