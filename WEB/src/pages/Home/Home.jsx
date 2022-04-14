import HomeCarousel from "../../components/HomeCarrousel/HomeCarousel"
import BulletinBoard from "../../components/BulletinBoard/BullentinBoard"
import './Home.css'



function Home() {
    return (
        <div className="home">
            <div className="">
                <HomeCarousel />
            </div>
            <div>
                <BulletinBoard />
            </div>
            <div>
                <nav className="nav justify-content-center align-content-center mb-3">
                    <a className="nav-link active fw-bold" aria-current="page" href="/noticias">Ultimas Noticias</a>
                </nav>

                <div class="card mb-3" style={{maxWidth: "540px"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">TITULO NOTICIA</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home