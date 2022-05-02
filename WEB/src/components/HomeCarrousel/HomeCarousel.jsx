import './HomeCarousel.css'
import img1 from '../../assets/images/CarouselImages/img1.JPG'
import img2 from '../../assets/images/CarouselImages/img2.JPG'
import img3 from '../../assets/images/CarouselImages/img3.JPG'


function HomeCarousel() {
    return (
        <div className="home-carousel">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt={img1} />
                        {/* <div className='text-animation'>
                            <h2>IV Rallye de Pontevedra 2022</h2>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt={img2} />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt={img3} />
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