import './Participants.css'
import placa from '../../assets/logo/placa.png'
import regulamiento from '../../assets/Pdfs/reg-part-pontevedra-2022.pdf'
import pdf_logo from '../../assets/Pdfs/pdf-logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCommunicating } from '../../services/api-service'


function Participants() {

    const [communicating, setcommunicating] = useState(null)

    useEffect(() => {
        getCommunicating()
            .then((communicate => {
                setcommunicating(communicate)
                console.log(communicate, 'comuncados aqui??')
            }))
    }, [])

    if (!communicating) {
        return null
    }

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
            <div className='mb-5'>
                <a href={regulamiento} className='link_Pdf d-flex align-items-center ms-5' style={{ textDecoration: 'none', color: 'black' }}>
                    <img className='img-pdf me-5' src={pdf_logo} alt={pdf_logo} />
                    <h3>Regulamiento particular...</h3>
                </a>
            </div>
            <hr />

            <div className='communcating mt-2'>
                <h2 className='text-center mb-5'>COMUNICADOS OFICIALES IV RALLY DE PONTEVEDRA </h2>
                {communicating.map((communicate) => (
                    <div className='mb-3 ms-5'>
                        <a className='d-flex align-items-center' href={communicate.pdf} style={{ textDecoration: 'none', color: 'black' }}>
                            <img className='img-pdf me-5' src={pdf_logo} alt={pdf_logo} />
                            <div>
                                <h5>{communicate.name}</h5>
                                <small>{communicate.updatedAt.slice(0, 9)}</small>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Participants