import './Footer.css'


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
                    <p className='copy'>Rally de Pontevedra 2022 &copy;</p>


                </footer>



            </div>
        </>

    )
}

export default Footer