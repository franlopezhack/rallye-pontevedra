import { useEffect, useState } from "react";
import { getReleases } from "../../services/api-service";
import { Link } from 'react-router-dom';
import './LastReleases.css'


function LastReleases() {

    const [releases, setReleases] = useState(undefined)


    useEffect(() => {
        getReleases()
            .then((releases) => {
                setReleases(releases.reverse().slice(0, 2))
            })
    }, []);


    if (!releases) {
        return null
    };


    return (
        <div className=" d-flex flex-wrap">
            {releases.map(release => (

                <div className="card card-last shadow mt-1 mb-2 ms-2" style={{ width: '30rem' }} key={release.id}>
                    <Link to={`/releases/${release.id}`} style={{ textDecoration: "none" }}>
                        <div className='inner text-center' >
                            <img src={release.avatar} className="card-img-top mt-2 p-1" alt={release.title} />
                        </div>
                    </Link>
                    <hr />
                    <div className="card-body">
                        <h5 className="card-title">{release.title}</h5>
                        <div className='card-price'>
                            <small>{release.description.slice(0, 150)}...</small>
                        </div>
                        <p>{release.date}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default LastReleases