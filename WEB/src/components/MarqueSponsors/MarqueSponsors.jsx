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
              
                        <a target='_blank' rel="noreferrer" href='http://www.inmobiliariabamarti.com/' className='image-sponsor'>
                            <img src={Bamarti} alt={Bamarti} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://starkausavil.es/' className='image-sponsor'>
                            <img src={Ausavil} alt={Ausavil} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://www.bonpolloavigal.com/' className='image-sponsor'>
                            <img src={Bonpollo} alt={Bonpollo} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://www.caetanoformulagalicia.es/' className='image-sponsor'>
                            <img src={Caetano} alt={Caetano} />
                        </a>
                   
                        <a target='_blank' rel="noreferrer" href='https://www.furgoline.com/' className='image-sponsor'>
                            <img src={Furgoline} alt={Furgoline} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='http://www.rcnsanxenxo.com/' className='image-sponsor'>
                            <img src={Nautico} alt={Nautico} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://www.racingdakart.com/proyecto/racing-dakart-sanxenxo/' className='image-sponsor'>
                            <img src={Dakar} alt={Dakar} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://rspremiumcar.com/' className='image-sponsor'>
                            <img src={RsAuto} alt={RsAuto} />
                        </a>
                    </div>
              
    )
}

export default MarqueeSponsors