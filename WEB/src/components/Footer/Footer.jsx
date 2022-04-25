import './Footer.css'
import escudería from '../../assets/logo/logo-escudería.png'


function Footer() {
    return (
        <>
            <hr />
            <div className="footer">


                <footer className=''>
                    <div className='footer-container d-flex flex-wrap justify-content-center '>

                        <div className='media  d-flex text-align-center justify-content-evenly mb-5'>
                            <a href="https://www.facebook.com/RallyePontevedra"><i className='fa fa-facebook'></i></a>
                            <a href="https://www.instagram.com/rallypontevedra"><i className='fa fa-instagram'></i></a>
                            <a href="mailto:info@rallydepontevedra.com"><i className='fa fa-envelope'></i></a>
                            <a href="/contacto"><i className='fa fa-phone'></i></a>
                        </div>

                    </div>
                    <div className='copy-logo d-flex justify-content-between'>
                        <strong className='copy mt-5'>Rally de Pontevedra 2022 &copy;</strong>
                        <img className='logo-esc' src={escudería} alt={escudería} />
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer