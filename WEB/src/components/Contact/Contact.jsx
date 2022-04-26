import './Contact.css'


function Contact() {
    return (
        <div className="contact">
            <h1>Contacto</h1>
            <hr />
            <div className='d-flex row mt-5 mb-5'>
                <h3>INFORMACIÓN GENERAL</h3>
                <a href='mailto:info@rallyedepontevedra.es'>info@rallyedepontevedra.es</a>
                <small>Teléfono: +34 671 56 25 78</small>
            </div>
            <div className='inscription mb-5'>
                <h3>INSCRIPCIONES</h3>
                <a href='mailto:inscipciones@rallyedepontevedra.es'>inscripciones@rallyedepontevedra.es</a>
            </div>


        </div>
    )
}

export default Contact