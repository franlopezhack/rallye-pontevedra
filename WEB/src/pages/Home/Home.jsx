import HomeCarousel from "../../components/HomeCarrousel/HomeCarousel"
import BulletinBoard from "../../components/BulletinBoard/BullentinBoard"
import './Home.css'
import LastReleases from "../../components/LastReleases/LastReleases"



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
                    <a className="nav-link active " aria-current="page" href="/releases">Ultimas Noticias</a>
                </nav>

                <LastReleases/>
            </div>
        </div>
    )
}

export default Home