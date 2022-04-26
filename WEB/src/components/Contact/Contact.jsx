import './Contact.css'


function Contact() {
    return (
        <div className="contact">
            <h1>Contacto</h1>
            <hr />
            <div className='d-flex row mt-5 mb-5'>
                <h3>INFORMACIÓN GENERAL</h3>
                <h4>Diego Besada</h4>
                <a href='mailto:info@rallyedepontevedra.es'>info@rallyedepontevedra.es</a>
                <small><strong>Teléfono:</strong>  663 473 083</small>
            </div>
            <div className='inscription mb-5 d-flex row'>
                <h3>INSCRIPCIONES</h3>
                <h4>Diana Rivas</h4>
                <a href='mailto:inscipciones@rallyedepontevedra.es'>inscripciones@rallyedepontevedra.es</a>
                <small><strong>Telefono:</strong> 671 562 578</small>
            </div>
            <div className='inscription mb-5'>
                <h3>PRENSA</h3>
                <a href='mailto:Prensarallyepontevedra@gmail.com'>inscripciones@rallyedepontevedra.es</a>
            </div>


        </div>
    )
}

export default Contact