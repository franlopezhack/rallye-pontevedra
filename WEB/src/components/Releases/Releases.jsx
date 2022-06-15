import { useEffect, useState } from "react";
import { getReleases } from "../../services/api-service";
import { Link } from 'react-router-dom';
import './Releases.css'


function Releases() {

    const [releases, setReleases] = useState(null)


    useEffect(() => {
        getReleases()
            .then((releases) => {
                setReleases(releases.reverse())
            })
    }, []);


    if (!releases) {
        return null
    };


    return (
        <>
            <h1 className="mt-5">NOTICIAS</h1>
            <hr/>
            <div className='item-body row justify-content-center'>
                {releases.map(release => (

                    <div className="card shadow mt-1 mb-2 ms-2" style={{ width: '30rem' }}  key={release.id}>
                        <Link to={`/releases/${release.id}`}  style={{ textDecoration: "none" }}>
                            <div className='inner text-center' >
                                <img src={release.avatar} className="card-img-top mt-2 p-1"  alt={release.title} />
                            </div>
                        </Link>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{release.title}</h5>
                            <div className='card-price'>
                                <small>{release.description.slice(0,150)}...</small>
                            </div>
                            <p>{release.date}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default Releases