import React from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter';

const Map = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = React.useState('')
    const coordinates = searchResults?.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    console.log(coordinates)

    const center = getCenter(coordinates)

    const [viewport, setViewport] = React.useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    return <ReactMapGl
        mapStyle='mapbox://styles/kgrondin/ckscxnbs6kby517plriufkml1'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {searchResults?.map(result => (
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p
                        role='img'
                        onClick={() => setSelectedLocation(result) } 
                        className='cursor-pointer text-2xl animate-bounce'
                        aria-label='push-pin'
                    >
                        🎯
                    </p>
                </Marker>
                {selectedLocation.long === result.long ? (
                    <Popup
                        onClose={() => setSelectedLocation}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        {result.title}
                    </Popup>
                ) : false }
            </div>
        ))}
    </ReactMapGl>
}

export default Map