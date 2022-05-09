import Marquee from 'react-fast-marquee'
import './MarqueSponsors.css'
import Ausavil from '../../assets/images/MarqueeSponsors/Ausavil.jpg'
import Bamarti from '../../assets/images/MarqueeSponsors/Bamarti.jpg'
import Bonpollo from '../../assets/images/MarqueeSponsors/Bonpollo.jpg'
import Caetano from '../../assets/images/MarqueeSponsors/Caetano Formula.jpg'
// import Exnor from '../../assets/images/MarqueeSponsors/Exnor.jpg'
import Furgoline from '../../assets/images/MarqueeSponsors/Furgoline.jpg'
// import Progreso from '../../assets/images/MarqueeSponsors/Garaje progreso.jpg.jpg'
import Nautico from '../../assets/images/MarqueeSponsors/Nautico Sanxenxo.jpg'
// import Polymade from '../../assets/images/MarqueeSponsors/Polymade.jpg'
import Dakar from '../../assets/images/MarqueeSponsors/Racing Dakart.jpg'
import RsAuto from '../../assets/images/MarqueeSponsors/RS Premium Car.jpg'
// import Vipeon from '../../assets/images/MarqueeSponsors/Vipeon.jpg'


function MarqueeSponsors() {
    return (
            <Marquee speed={0} gradient={false}>
                <section className='sponsors-section'>
                    <ul className='d-flex flex-wrap justify-content-between'>
                        <a href='https://www.sanxenxo.es/index.php/es/' className='image-wrapper'>
                            <img src={Bamarti} alt={Bamarti} />
                        </a>

                        <a href='http://www.concellodemeano.com/ga/inicio' className='image-wrapper'>
                            <img src={Ausavil} alt={Ausavil} />
                        </a>

                        <a href='http://www.cerdedo-cotobade.gal/es/' className='image-wrapper'>
                            <img src={Bonpollo} alt={Bonpollo} />
                        </a>

                        <a href='https://campolameiro.org/es/' className='image-wrapper'>
                            <img src={Caetano} alt={Caetano} />
                        </a>

                        <a href='https://morana.org/' className='image-wrapper'>
                            <img src={Furgoline} alt={Furgoline} />
                        </a>

                        <a href='https://deporte.xunta.gal/' className='image-wrapper'>
                            <img src={Nautico} alt={Nautico} />
                        </a>

                        <a href='https://www.depo.gal/es/' className='image-wrapper'>
                            <img src={Dakar} alt={Dakar} />
                        </a>

                        <a href='https://www.xunta.gal/portada' className='image-wrapper'>
                            <img src={RsAuto} alt={RsAuto} />
                        </a>
                    </ul>
                </section>
            </Marquee>
    )
}

export default MarqueeSponsors