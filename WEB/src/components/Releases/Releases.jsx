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
            <div className="release-card">
                {releases.map(release =>
                    <Link to={`/releases/${release.id}`} style={{ textDecoration: 'none' }} key={release.title}>
                        <div className="card card-release mb-5 me-5" >
                            <div className="row g-0">
                                <div className="col-md-4" id='img-card'>
                                    <img src={release.avatar} className="img-fluid rounded-start" alt={release.image} />
                                </div>
                                <div className="col-md-8 text-release">
                                    <div className="card-body">
                                        <h5 className="card-title">{release.title}</h5>
                                        <p className="card-text">{release.description.slice(0, 100)}...</p>
                                        {release.createdAt.slice(0,10)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Releases