import './HomeCarousel.css'
import img1 from '../../assets/images/CarouselImages/img1.JPG'
import img2 from '../../assets/images/CarouselImages/img2.JPG'
import img3 from '../../assets/images/CarouselImages/foto ruta.jpeg'
import placa from '../../assets/logo/placa.png'
import sanxenxo from '../../assets/images/Corporaciones/MSANXENXO.L.COLOR_1-removebg-preview.png'


function HomeCarousel() {
    return (
        <div className="home-carousel">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt={img1} />
                        <div className='text-animation'>
                            <h2>IV Rallye de Pontevedra 2022</h2>
                        </div>
                        <div className='img-animation me-5'>
                            <img src={placa} alt={placa} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt={img2} />
                        <div className='text-img2'>
                        <img className='animate__animated animate__backInLeft animate__delay-2s animate__slower' src={sanxenxo} alt={sanxenxo} />
                            <h2 className='animate__animated animate__bounceInDown animate__delay-2s animate__slower'>
                            <div>#Sanxenxo,</div> 
                            <div>algo mas</div> 
                            <div>que sol y playa</div>
                            </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt={img3} />
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