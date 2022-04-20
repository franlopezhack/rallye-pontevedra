import { useEffect, useState } from "react";
import { getReleases } from "../../services/api-service";
import { Link } from 'react-router-dom';
import './LastReleases.css'


function LastReleases() {

    const [releases, setReleases] = useState(undefined)


    useEffect(() => {
        getReleases()
            .then((releases) => {
                setReleases(releases.reverse().slice(0,2))
            })
    }, []);


    if (!releases) {
        return null
    };


    return (
        <div className="release-card d-flex flex-wrap">
            {releases.map(release =>
                <Link to={`/releases/${release.id}`} style={{textDecoration:'none'}} key={release.title}>
                    <div className="card mb-5 me-5" style={{ maxWidth: "540px" }}  >
                        <div className="row g-0">
                            <div className="col-md-4" id='img-card'>
                                <img src={release.image} className="img-fluid rounded-start" alt={release.image} />
                            </div>
                            <div className="col-md-8 text-release">
                                <div className="card-body">
                                    <h5 className="card-title">{release.title}</h5>
                                    <p className="card-text">{release.description.slice(0, 100)}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default LastReleases