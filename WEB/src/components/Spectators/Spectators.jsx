import { Link } from 'react-router-dom'

import './Spectators.css'
import Info from '../../assets/images/Spectators/CARTELSEGURIDADPUBLICO.jpg'
import tc_s from '../../assets/images/Spectators/TC SANXENXO.png'
import tc_1 from '../../assets/images/Spectators/TC MEAÑO.png'
import tc_2 from '../../assets/images/Spectators/TC CERDEDO COTOBADE.png'
import tc_3 from '../../assets/images/Spectators/TC Campo Lameiro - Moraña.png'
import itinerario from '../../assets/images/Spectators/Captura de Pantalla 2022-06-15 a las 20.55.12.png'
import pe_a_chapa from '../../assets/images/Spectators/D25KVtmXgAUQTlv.jpeg'



function Spectators() {
    return (
        <>
            <h1 className='mt-5'>INFORMACIÓN PARA ESPECTADORES</h1>
            <hr />
            <div className='spectators'>
                <img className='img_guide mt-2' src={Info} alt={Info} />
                <img className='mt-2' src={itinerario} alt={itinerario} />
            </div>
            <div className='tc_container'>

                <div>
                    <h5>Tramos</h5>
                </div>
                <section className='tc_section d-flex'>
                    <div className='tc'>
                        <h3>TC-S  SANXENXO</h3>
                        <img src={tc_s} alt={tc_s} />
                    </div>

                    <div className='tc'>
                        <h3>TC-1-4  MEAÑO</h3>
                        <img src={tc_1} alt={tc_1} />
                    </div>
                </section>

                <section className='tc_section d-flex'>
                    <div className='tc'>
                        <h3>TC-2-5  CERDEDO - COTOBADE</h3>
                        <img src={tc_2} alt={tc_2} />
                    </div>

                    <div className='tc'>
                        <h3>TC-3-6  CAMPOLAMEIRO - MORAÑA</h3>
                        <img src={tc_3} alt={tc_3} />
                    </div>
                </section>
                <section className='chapa d-flex'>
                    <h3 className='mb-5 mt-5 me-5' >
                        Más información de los tramos en:
                    </h3>
                    <Link to='http://www.peachaparacing.es/2022/06/guia-tramos-horarios-y-lista-de_15.html' style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={pe_a_chapa} alt={pe_a_chapa} />
                    </Link>
                </section>

            </div>
        </>
    )
}

export default Spectators