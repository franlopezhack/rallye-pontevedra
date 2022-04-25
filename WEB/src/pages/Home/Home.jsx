import HomeCarousel from "../../components/HomeCarrousel/HomeCarousel"
import BulletinBoard from "../../components/BulletinBoard/BullentinBoard"
import './Home.css'
import LastReleases from "../../components/LastReleases/LastReleases"
import { Link } from "react-router-dom"
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



function Home() {
    return (
        <div className="home">
        
            <div className="">
                <HomeCarousel />
            </div>
            <div>
            <Marquee>
            <section className='footer-section'>
                    <ul className='footer-list d-flex flex-wrap justify-content-between'>
                        <article className='me-4 mb-5'>
                            <img src={sanxenxo} alt={sanxenxo} />
                        </article>

                        <article className='me-4'>
                            <img src={meaño} alt={meaño} />
                        </article>

                        <article className='me-4'>
                            <img src={cerdedo} alt={cerdedo} />
                        </article>

                        <article className='me-4'>
                            <img src={campolameiro} alt={campolameiro} />
                        </article>

                        <article className='me-4'>
                            <img src={moraña} alt={moraña} />
                        </article>

                        <article className='me-4'>
                            <img src={deporte} alt={deporte} />
                        </article>

                        <article className='me-4'>
                            <img src={deputacion} alt={deputacion} />
                        </article>

                        <article className='me-4'>
                            <img src={xunta} alt={xunta} />
                        </article>

                        <article className='me-4'>
                            <img src={xacobeo} alt={xacobeo} />
                        </article>

                    </ul>
                </section>
            </Marquee>
            </div>
            <div>
                <BulletinBoard />
            </div>
            <div>
                <nav className="nav justify-content-center align-content-center mb-3">
                <Link to='/releases'>
                <p className="nav-link active " aria-current="page">Ultimas Noticias</p>
                </Link>
                </nav>

                <LastReleases/>
            </div>
        </div>
    )
}

export default Home