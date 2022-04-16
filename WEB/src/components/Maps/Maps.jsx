import React, { useEffect, useState } from "react"
import { getMaps } from "../../services/api-service"


function Maps() {

    const [maps, setMaps] = useState(undefined)

    useEffect(() => {
        getMaps(maps)
            .then((maps) => {
                setMaps(maps)
            })
    }, [maps])

    if (!maps) {
        return null
    }

    return (
        <div>
            {maps.map(map =>
                <div className="card" style={{width: '18rem'}}>
                    <img src={map.maps} className="card-img-top" alt={map.name}/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            )}
        </div>
    )
}

export default Maps