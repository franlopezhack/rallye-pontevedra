import React from "react";
import {useParams } from "react-router";
import { getReleasesDetail } from "../../services/api-service";
import './ReleaseDetail.css'

function ReleasesDetail() {

    const [releases, setReleases] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        getReleasesDetail(id)
            .then((releases) => {
                setReleases(releases)
            })
    }, [id]);

    if (!releases) {
        return null
    }

    return (
        <div className="release-card d-flex flex-wrap ">
                    <div className="card card-detail mb-5 me-5" >
                        <div className="row g-0">
                            <div className="col-md-4" id='img-card'>
                                <img src={releases.avatar} className="img-fluid rounded-start" alt={releases.image} />
                            </div>
                            <div className="col-md-8 text-release">
                                <div className="card-body">
                                    <h5 className="card-title">{releases.title}</h5>
                                    <p className="card-text">{releases.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ReleasesDetail