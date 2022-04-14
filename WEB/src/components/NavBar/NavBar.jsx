import './NavBar.css'
import banner from '../../assets/logo/background.JPG'
import placa from '../../assets/logo/placa.png'

function NavBar() {
    return (

        <>
          
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">NOTICIAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">PARTICIPANTES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">PÚBLICO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href='/'>PRENSA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href='/'>CONTACTO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href='/'>SEGURIDAD</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id='banner'>
                <img className='img1' src={banner} alt={banner} />
                <img className='img2' src={placa}alt={placa} />
           </section>

        </>
    )
}

export default NavBar