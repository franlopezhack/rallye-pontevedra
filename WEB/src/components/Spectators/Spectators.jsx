import './Spectators.css'
import Info from '../../assets/images/Spectators/CARTELSEGURIDADPUBLICO.jpg'
import tc_s from '../../assets/images/Spectators/TC SANXENXO.png'
import tc_1 from '../../assets/images/Spectators/TC MEAÑO.png'
import tc_2 from '../../assets/images/Spectators/TC CERDEDO COTOBADE.png'
import tc_3 from '../../assets/images/Spectators/TC Campo Lameiro - Moraña.png'


function Spectators() {
    return (
        <>
            <h1 className='mt-5'>INFORMACIÓN PARA ESPECTADORES</h1>
            <hr />
            <div className='spectators'>
                <img className='img_guide' src={Info} alt={Info} />
            </div>
            <div className='tc_container'>

                <div>
                    <h5>Tramos</h5>
                </div>
                <section className='d-flex'>
                    <div className='tc'>
                        <h3>TC-S  SANXENXO</h3>
                        <img src={tc_s} alt={tc_s} />
                    </div>

                    <div className='tc'>
                        <h3>TC-1-4  MEAÑO</h3>
                        <img src={tc_1} alt={tc_1} />
                    </div>
                </section>

                <section className='d-flex'>
                    <div className='tc'>
                        <h3>TC-2-5  CERDEDO - COTOBADE</h3>
                        <img src={tc_2} alt={tc_2} />
                    </div>

                    <div className='tc'>
                        <h3>TC-3-6  CAMPOLAMEIRO - MORAÑA</h3>
                        <img src={tc_3} alt={tc_3} />
                    </div>
                </section>


            </div>
        </>
    )
}

export default Spectators