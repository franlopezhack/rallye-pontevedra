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
// import ClocktDate from "../../components/MomentDate/MomentDate"
// import { useEffect, useState } from "react"



function Home() {

    // const [timerDays, setTimerDays] = useState()
    // const [timerHours, setTimerHours] = useState()
    // const [timerMinutes, setTimerMinutes] = useState()
    // const [timerSeconds, setTimerSeconds] = useState()

    // let interval

    // const startTimer = () => {
    //     const countDownDate = new Date('Jun 24,2022').getTime();

    //     interval = setInterval(() => {
    //         const now = new Date().getTime();

    //         const distance = countDownDate - now;
    //         const days = Math.floor(distance / (24 * 60 * 60 * 1000));
    //         const hours = Math.floor((distance / (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (60 * 100)) / 1000);

    //         if (distance < 0) {
    //             //Stop Timer
    //             clearInterval(interval.current)
    //         } else {
    //             //Update Timer
    //             setTimerDays(days);
    //             setTimerHours(hours);
    //             setTimerMinutes(minutes);
    //             setTimerSeconds(seconds)

    //         }
    //     })
    // }

    // useEffect(() => {
    //     startTimer()
    // })

    return (
        <div className="home">
            <div className='maquee'>
                <Marquee pauseOnHover={true} gradientWidth={5} speed={40} >
                    <section className='nav-section'>
                        <ul className='nav-list d-flex flex-wrap justify-content-between'>
                            <a href='https://www.sanxenxo.es/index.php/es/' className='image-wrapper'>
                                <img src={sanxenxo} alt={sanxenxo} />
                            </a>

                            <a href='http://www.concellodemeano.com/ga/inicio' className='image-wrapper'>
                                <img src={meaño} alt={meaño} />
                            </a>

                            <a href='http://www.cerdedo-cotobade.gal/es/' className='image-wrapper'>
                                <img src={cerdedo} alt={cerdedo} />
                            </a>

                            <a href='https://campolameiro.org/es/' className='image-wrapper'>
                                <img src={campolameiro} alt={campolameiro} />
                            </a>

                            <a href='https://morana.org/' className='image-wrapper'>
                                <img src={moraña} alt={moraña} />
                            </a>

                            <a href='https://deporte.xunta.gal/' className='image-wrapper'>
                                <img src={deporte} alt={deporte} />
                            </a>

                            <a href='https://www.depo.gal/es/' className='image-wrapper'>
                                <img src={deputacion} alt={deputacion} />
                            </a>

                            <a href='https://www.xunta.gal/portada' className='image-wrapper'>
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
                {/* <ClocktDate
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds} /> */}
            </div>
            <div>
                <BulletinBoard />
            </div>
            <div className="marquee-warning  mt-3 text-center">
                    <h3 className=""> INSCRIPCIONES ABIERTAS: <small>puedes realizar la inscripción accediendo a la seccion PARTICIPANTES</small></h3>         
            </div>
            <div>
                <nav className="nav d-flex justify-content-center">
                    <p className="d-flex">Ultimas Noticias</p>
                </nav>
                <div className="d-flex justify-content-center">
                    <LastReleases />
                </div>
                <div className="d-flex justify-content-end">
                    <Link to='/noticias'>
                        <h1 className="btn-noticias btn me-5">Todas las noticias</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home