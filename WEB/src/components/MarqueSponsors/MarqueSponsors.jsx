import './MarqueSponsors.css'
import Ausavil from '../../assets/images/MarqueeSponsors/Ausavil.jpg'
import Bamarti from '../../assets/images/MarqueeSponsors/Bamarti.jpg'
import Bonpollo from '../../assets/images/MarqueeSponsors/Bonpollo.jpg'
import Caetano from '../../assets/images/MarqueeSponsors/Caetano Formula.jpg'
import Furgoline from '../../assets/images/MarqueeSponsors/Furgoline.jpg'
import Nautico from '../../assets/images/MarqueeSponsors/Nautico Sanxenxo.jpg'
import Dakar from '../../assets/images/MarqueeSponsors/Racing Dakart.jpg'
import RsAuto from '../../assets/images/MarqueeSponsors/RS Premium Car.jpg'


function MarqueeSponsors() {
    return (
   
                <div className='sponsors-list'>
              
                        <a href='https://www.sanxenxo.es/index.php/es/' className='image-sponsor'>
                            <img src={Bamarti} alt={Bamarti} />
                        </a>

                        <a href='http://www.concellodemeano.com/ga/inicio' className='image-sponsor'>
                            <img src={Ausavil} alt={Ausavil} />
                        </a>

                        <a href='http://www.cerdedo-cotobade.gal/es/' className='image-sponsor'>
                            <img src={Bonpollo} alt={Bonpollo} />
                        </a>

                        <a href='https://campolameiro.org/es/' className='image-sponsor'>
                            <img src={Caetano} alt={Caetano} />
                        </a>
                   
                        <a href='https://morana.org/' className='image-sponsor'>
                            <img src={Furgoline} alt={Furgoline} />
                        </a>

                        <a href='https://deporte.xunta.gal/' className='image-sponsor'>
                            <img src={Nautico} alt={Nautico} />
                        </a>

                        <a href='https://www.depo.gal/es/' className='image-sponsor'>
                            <img src={Dakar} alt={Dakar} />
                        </a>

                        <a href='https://www.xunta.gal/portada' className='image-sponsor'>
                            <img src={RsAuto} alt={RsAuto} />
                        </a>
                    </div>
              
    )
}

export default MarqueeSponsors