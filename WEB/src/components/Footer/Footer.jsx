import sanxenxo from '../../assets/images/Corporaciones/MSANXENXO.L.COLOR_1-removebg-preview.png'
import meaño from '../../assets/images/Corporaciones/meaño-removebg-preview.png'
import cerdedo from '../../assets/images/Corporaciones/cerdedo-removebg-preview.png'
import campolameiro from '../../assets/images/Corporaciones/CampoLameiro.svg.png'
import moraña from '../../assets/images/Corporaciones/moaña.png'
import deputacion from '../../assets/images/Corporaciones/Deputacion-de-Pontevedra.png'
import xunta from '../../assets/images/Corporaciones/xunta.png'
import deporte from '../../assets/images/Corporaciones/deporte-removebg-preview.png'
import xacobeo from '../../assets/images/Corporaciones/xacobeo-removebg-preview.png'
import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <section className='footer-section'>
                <ul className='footer-list d-flex flex-wrap justify-content-start align-items-center'>
                    <article>
                        <img src={sanxenxo} alt={sanxenxo} />
                    </article>

                    <article>
                        <img src={meaño} alt={meaño} />
                    </article>

                    <article>
                        <img src={cerdedo} alt={cerdedo} />
                    </article>

                    <article>
                        <img src={meaño} alt={campolameiro} />
                    </article>

                    <article>
                        <img src={moraña} alt={moraña} />
                    </article>

                    <article>
                        <img src={deporte} alt={deporte} />
                    </article>

                    <article>
                        <img src={deputacion} alt={deputacion} />
                    </article>

                    <article>
                        <img src={xunta} alt={xunta} />
                    </article>

                    <article>
                        <img src={xacobeo} alt={xacobeo} />
                    </article>

                </ul>
            </section>
            <footer className=''>
                <div className='footer-container d-flex flex-wrap justify-content-center '>

                    <div className='media  d-flex text-align-center justify-content-evenly mb-5'>
                        <a href="https://www.facebook.com/RallyePontevedra"><i className='fa fa-facebook'></i></a>
                        <a  href="https://www.instagram.com/rallypontevedra/"><i className='fa fa-instagram'></i></a>
                        <a  href="mailto:info@rallydepontevedra.com"><i className='fa fa-envelope'></i></a>
                        <a  href="/contacto"><i className='fa fa-phone'></i></a>
                    </div>
                    
                </div>
                <p className='copy'>Rally de Pontevedra 2022 &copy;</p>
            </footer>
        </div>
    )
}

export default Footer