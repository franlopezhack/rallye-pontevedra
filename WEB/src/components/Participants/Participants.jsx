import './Participants.css'
import placa from '../../assets/logo/placa.png'

function Participants() {

    return (
        <>
        <h1 className='mt-5'>Participantes</h1>
        <hr/>
            <div className="info-participants mt-5 mb-5">
                <div className='container-participants text-center'>
                    <h4 className='mb-5'>Ya están abiertas las inscripciones para el IV Rally de Pontevedra, pincha en el botón para acceder al formulario de inscripción</h4>
                    <img className='mt-5 mb-5' src={placa} alt={placa} />
                    <div>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe4ahs1xp5kY_eIWAyn22PdaUaVLV1qFH6jdhxb6PFOH9v9Zg/viewform' >
                            <p className='btn btn-primary'>INSCRIPCIONES</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Participants