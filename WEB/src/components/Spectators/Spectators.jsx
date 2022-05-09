import './Spectators.css'
import Info from '../../assets/images/Spectators/CARTELSEGURIDADPUBLICO.jpg'


function Spectators() {
    return (
        <>
        <h1 className='mt-5'>INFORMACIÓN PARA ESPECTADORES</h1>
        <hr/>
            <div className='spectators'>
                <img src={Info} alt={Info} />
            </div>
        </>
    )
}

export default Spectators