import './HomeCarousel.css'
import img1 from '../../assets/images/CarouselImages/img1.JPG'
import img2 from '../../assets/images/CarouselImages/img2.JPG'
import img3 from '../../assets/images/CarouselImages/foto ruta.jpeg'
import placa from '../../assets/logo/placa.png'
import sanxenxo from '../../assets/images/Corporaciones/MSANXENXO.L.COLOR_1-removebg-preview.png'
import { Link } from 'react-router-dom'
import Exnor from '../../assets/images/MarqueeSponsors/Exnor.jpg'
import Progreso from '../../assets/images/MarqueeSponsors/Garaje progreso.png'
import Polymade from '../../assets/images/MarqueeSponsors/Polymade.jpg'
import Vipeon from '../../assets/images/MarqueeSponsors/Vipeon.jpg'



function HomeCarousel() {
    return (
        <div className="home-carousel">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 animate__animated animate__fadeIn  animate__fast" id='img-item' alt={img1} />
                        <div className='text-img' id='text-1'>
                            <h2 className='animate__animated animate__fadeIn animate__delay-2s animate__slower' >IV Rallye de Pontevedra 2022</h2>
                        </div>
                        <div className='imgs-sponsors-container'>
                            <img className='animate__animated animate__fadeIn animate__delay-1s animate__slow img-sponsor-1' src={Progreso} alt={Progreso} />
                            <img className='animate__animated animate__fadeIn animate__delay-1s animate__slow img-sponsor-2' src={Vipeon} alt={Vipeon} />
                            <img className='animate__animated animate__fadeIn animate__delay-1s animate__slow img-sponsor-3' src={Polymade} alt={Polymade} />
                            <img className='animate__animated animate__fadeIn animate__delay-1s animate__slow img-sponsor-4' src={Exnor} alt={Polymade} />

                        </div>
                        <div className='placa-img me-5'>
                            <img src={placa} alt={placa} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 img-3 animate__animated animate__fadeIn animate__fast" id='img-item' alt={img2} />
                        <div className='text-img'>
                            <Link to='/'>
                                <img className='animate__animated animate__fadeIn animate__delay-2s animate__slower ' src={sanxenxo} alt={sanxenxo} />
                            </Link>
                            <h2 className='animate__animated animate__fadeIn animate__delay-1s animate__slow'>
                                #Sanxenxo, mucho mas que sol y playa!
                            </h2>
                        </div>
                        <div className='placa-img me-5'>
                            <img src={placa} alt={placa} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 animate__animated animate__fadeIn  animate__fast" id='img-item' alt={img3} />
                        <div className='placa-img me-5'>
                            <img src={placa} alt={placa} />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomeCarousel