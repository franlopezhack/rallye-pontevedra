import React from "react";
import {useParams } from "react-router";
import { getReleasesDetail } from "../../services/api-service";
import './ReleaseDetail.css'

function ReleasesDetail() {

    const [release, setRelease] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        getReleasesDetail(id)
            .then((release) => {
                setRelease(release)
            })
    }, [id]);

    if (!release) {
        return null
    }

    return (
                    <div className="card card-detail  mb-5 me-5" >
                        <div className="row g-0 mt-5">
                            <div className="col-md-4" id='img-card'>
                                <img src={release.avatar} className="img-fluid rounded-start" alt={release.image} />
                            </div>
                            <div className="col-md-8 text-release">
                                <div className="card-body">
                                    <h5 className="card-title">{release.title}</h5>
                                    <p className="card-text">{release.description}</p>
                                    <a  style={{textDecoration:'none', color:'black' }} href={release.link}><h6 style={{color:'red'}}>Enlace detalle noticia</h6></a>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ReleasesDetail