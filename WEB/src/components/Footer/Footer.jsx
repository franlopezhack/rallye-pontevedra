import './Footer.css'
import escudería from '../../assets/logo/logo-escudería.png'


function Footer() {
    return (
        <>
            <hr />



            <footer className='p-5'>
                <div className='footer-container d-flex flex-wrap justify-content-center'>

                    <div className='media  d-flex text-align-center justify-content-evenly mb-5 mt-2'>
                        <a href="https://www.facebook.com/RallyePontevedra"><i className='fa fa-facebook'></i></a>
                        <a href="https://www.instagram.com/rallypontevedra"><i className='fa fa-instagram'></i></a>
                        <a href="mailto:info@rallydepontevedra.es"><i className='fa fa-envelope'></i></a>
                        <a href="/contacto"><i className='fa fa-phone'></i></a>
                    </div>

                </div>
                <div className='copy-logo'>
                    <strong className='copy mt-5'>Rally de Pontevedra 2022 &copy;</strong>
                    <img className='logo-esc' src={escudería} alt={escudería} />
                    <div>
                        <ul className='footer-adress'>
                            <li>FONTOIRA Nº42</li>
                            <li>36960</li>
                            <li>SANXENXO    PONTEVEDRA</li>
                            <li>TLFN.: 615562578</li>
<<<<<<< HEAD
                            <li>TLFN.: 615562578</li>
=======
                            <li>Aqui estoy poniendo esto para hacer las pruebas sobre los errores de heroku</li>
>>>>>>> 39546f23e9ac52dd13b222b5ad3a201281eed4df
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer