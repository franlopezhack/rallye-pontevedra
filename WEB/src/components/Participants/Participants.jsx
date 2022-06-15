import './Participants.css'
import placa from '../../assets/logo/placa.png'
import regulamiento from '../../assets/Pdfs/reg-part-pontevedra-2022.pdf'
import pdf_logo from '../../assets/Pdfs/pdf-logo.png'
import { Link } from 'react-router-dom'


function Participants() {

    return (
        <>
            <h1 className='mt-5'>INFORMACIÓN PARTICIPANTES</h1>
            <hr />
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
            <div className=''>
                <Link to={regulamiento} className='link_Pdf d-flex align-items-center' style={{textDecoration:'none', color:'black'}}>
                    <img className='img-pdf me-5' src={pdf_logo} alt={pdf_logo} />
                    <h3>Regulamiento particular...</h3>
                </Link>
            </div>
        </>
    )
}

export default Participants