import BulletinBoard from "../../components/BulletinBoard/BullentinBoard"
import './Home.css'
import LastReleases from "../../components/LastReleases/LastReleases"
import sanxenxo from '../../assets/images/Corporaciones/MSANXENXO.L.COLOR_1-removebg-preview.png'
import meaño from '../../assets/images/Corporaciones/meaño-removebg-preview.png'
import cerdedo from '../../assets/images/Corporaciones/cerdedo-removebg-preview.png'
import campolameiro from '../../assets/images/Corporaciones/campo-lameiro.png'
import moraña from '../../assets/images/Corporaciones/moaña.png'
import deputacion from '../../assets/images/Corporaciones/Deputacion-de-Pontevedra.png'
import xunta from '../../assets/images/Corporaciones/xunta.png'
import deporte from '../../assets/images/Corporaciones/deporte-removebg-preview.png'
import xacobeo from '../../assets/images/Corporaciones/xacobeo-removebg-preview.png'
import Marquee from 'react-fast-marquee'
import { Link } from "react-router-dom"



function Home() {
    return (
        <div className="home">
            <div>
                <Marquee pauseOnHover={true} gradientWidth={50} speed={40} className='maquee' >
                    <section className='nav-section'>
                        <ul className='nav-list d-flex flex-wrap justify-content-between'>
                            <a href='https://www.sanxenxo.es/index.php/es/' className='image-wrapper me-4 mb-5'>
                                <img src={sanxenxo} alt={sanxenxo} />
                            </a>

                            <a href='http://www.concellodemeano.com/ga/inicio' className='image-wrapper me-4'>
                                <img src={meaño} alt={meaño} />
                            </a>

                            <a href='http://www.cerdedo-cotobade.gal/es/' className='image-wrapper me-4'>
                                <img src={cerdedo} alt={cerdedo} />
                            </a>

                            <a href='https://campolameiro.org/es/' className='image-wrapper me-4'>
                                <img src={campolameiro} alt={campolameiro} />
                            </a>

                            <a href='https://morana.org/' className='image-wrapper me-4'>
                                <img src={moraña} alt={moraña} />
                            </a>

                            <a href='https://deporte.xunta.gal/' className='image-wrapper me-4'>
                                <img src={deporte} alt={deporte} />
                            </a>

                            <a href='https://www.depo.gal/es/' className='image-wrapper me-4'>
                                <img src={deputacion} alt={deputacion} />
                            </a>

                            <a href='https://www.xunta.gal/portada' className='image-wrapper me-4'>
                                <img src={xunta} alt={xunta} />
                            </a>

                            <a href='/' className='image-wrapper me-4'>
                                <img src={xacobeo} alt={xacobeo} />
                            </a>

                        </ul>
                    </section>
                </Marquee>
            </div>
            <div>
                <BulletinBoard />
            </div>
            <div>
                <nav className="nav  align-content-center mb-3">
                    <Link to='/releases' style={{textDecoration:"none"}} >
                        <p className="nav-link active " aria-current="page">Ultimas Noticias</p>
                    </Link>
                </nav>
                <LastReleases />
            </div>
        </div>
    )
}

export default Home