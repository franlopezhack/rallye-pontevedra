import sanxenxo from '../../assets/images/Corporaciones/MSANXENXO.L.COLOR_1-removebg-preview.png'
import meaño from '../../assets/images/Corporaciones/meaño-removebg-preview.png'
import cerdedo from '../../assets/images/Corporaciones/cerdedo-removebg-preview.png'
import campolameiro from '../../assets/images/Corporaciones/CampoLameiro.svg.png'
import moraña from '../../assets/images/Corporaciones/moaña.png'
import deputacion from '../../assets/images/Corporaciones/Deputacion-de-Pontevedra.png'
import xunta from '../../assets/images/Corporaciones/xunta.png'
import deporte from '../../assets/images/Corporaciones/deporte-removebg-preview.png'
import xacobeo from '../../assets/images/Corporaciones/xacobeo-removebg-preview.png'


function Footer() {
    return (
        <div className="footer">
            <section>
                <ul>
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
                        <img src={campolameiro} alt={campolameiro} />
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
        </div>
    )
}

export default Footer