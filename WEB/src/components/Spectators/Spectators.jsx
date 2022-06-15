import './Spectators.css'
import Info from '../../assets/images/Spectators/CARTELSEGURIDADPUBLICO.jpg'


function Spectators() {
    return (
        <>
        <h1 className='mt-5'>INFORMACIÓN PARA ESPECTADORES</h1>
        <hr/>
            <div className='spectators'>
                <img className='img_guide' src={Info} alt={Info} />
            </div>
            <div>
                <h5>Tramos</h5>
                <h3>TC-1  SANXENXO</h3>
                <h3>TC-2-5  SANXENXO</h3>
                <h3>TC-3-6  SANXENXO</h3>
                <h3>TC-4-7  SANXENXO</h3>

            </div>
        </>
    )
}

export default Spectators