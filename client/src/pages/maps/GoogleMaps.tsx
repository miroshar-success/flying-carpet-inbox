import React, { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper, InfoWindow, Polygon, Polyline } from 'google-maps-react';

// components
import PageTitle from '../../components/PageTitle';

interface MapContainerProps {
    google: any;
}

const BasicMap = ({ google }: MapContainerProps) => {
    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Basic</h4>

            {/* basic map */}
            <div id="gmaps-basic" style={{ position: 'relative' }} className="gmaps">
                <Map
                    google={google}
                    initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                    zoom={14}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}></Map>
            </div>
        </div>
    );
};

const WithMarkers = ({ google }: MapContainerProps) => {
    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Markers</h4>
            <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    zoom={18}
                    initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}>
                    <Marker
                        name="SOMA"
                        position={{ lat: 21.56956, lng: 71.5892598 }}
                        title="The marker`s title will appear as a tooltip."
                    />

                    <Marker name="Dolores park" position={{ lat: 21.56969, lng: 71.5893798 }} />
                </Map>
            </div>
        </div>
    );
};

const LightStyledMap = ({ google }: MapContainerProps) => {
    const mapStyles = [
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 17 }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 18 }],
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 16 }],
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#dedede' }, { lightness: 21 }],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }],
        },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#fefefe' }, { lightness: 20 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
        },
    ];

    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Ultra Light</h4>

            <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    zoom={14}
                    initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    styles={mapStyles}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}></Map>
            </div>
        </div>
    );
};

const DarkStyledMap = ({ google }: MapContainerProps) => {
    const mapStyles = [
        {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
        },
        {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }],
        },
        {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }],
        },
        {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }, { lightness: 20 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }],
        },
        {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#c4c4c4' }],
        },
        {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 20 }],
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 21 }, { visibility: 'on' }],
        },
        {
            featureType: 'poi.business',
            elementType: 'geometry',
            stylers: [{ visibility: 'on' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#e5c163' }, { lightness: '0' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 18 }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ color: '#575757' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#2c2c2c' }],
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 16 }],
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#999999' }],
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 19 }],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 17 }],
        },
    ];

    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Dark</h4>

            <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    zoom={14}
                    initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    styles={mapStyles}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}></Map>
            </div>
        </div>
    );
};

const WithPolygons = ({ google }: MapContainerProps) => {
    const polygon = [
        { lat: -12.040397656836609, lng: -77.03373871559225 },
        { lat: -12.040248585302038, lng: -77.03993927003302 },
        { lat: -12.050047116528843, lng: -77.02448169303511 },
        { lat: -12.044804866577001, lng: -77.02154422636042 },
    ];

    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Polygons</h4>

            <div id="gmaps-polygons" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    initialCenter={{ lat: -12.043333, lng: -77.028333 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    zoom={14}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}>
                    <Polygon
                        fillColor="#BBD8E9"
                        fillOpacity={0.6}
                        paths={polygon}
                        strokeColor="#BBD8E9"
                        strokeOpacity={1}
                        strokeWeight={3}
                    />
                </Map>
            </div>
        </div>
    );
};

const WithPolyline = ({ google }: MapContainerProps) => {
    const polyline = [
        { lat: -12.040397656836609, lng: -77.03373871559225 },
        { lat: -12.048138585302038, lng: -77.03593927003302 },
        { lat: -12.044804866577001, lng: -77.02454422636042 },
    ];

    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Polyline</h4>

            <div id="gmaps-polygons" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    initialCenter={{ lat: -12.043333, lng: -77.028333 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    zoom={14}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}>
                    <Polyline
                        fillColor="#BBD8E9"
                        fillOpacity={0.6}
                        path={polyline}
                        strokeColor="#BBD8E9"
                        strokeOpacity={1}
                        strokeWeight={3}
                    />
                </Map>
            </div>
        </div>
    );
};

const StreetViewMap = ({ google }: MapContainerProps) => {
    let mapRef: any = useRef();

    /**
     * Activate the street view
     */
    const activateStreetView = (position: { lat: number; lng: number }) => {
        if (mapRef) {
            const mapObj = mapRef.map.getStreetView();
            mapObj.setPov({ heading: 34, pitch: 10 });
            mapObj.setPosition(position);
            mapObj.setVisible(true);
        }
    };

    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Street View Panoramas Google Map</h4>

            <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    ref={(map: any) => (mapRef = map)}
                    zoom={14}
                    initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    onReady={() => {
                        activateStreetView({ lat: 40.7295174, lng: -73.9986496 });
                    }}></Map>
            </div>
        </div>
    );
};

const ClickableMarkers = ({ google }: MapContainerProps) => {
    const [activeMarker, setActiveMarker] = useState<any>({});
    const [selectedPlace, setSelectedPlace] = useState<any>({});
    const [showingInfoWindow, setShowingInfoWindow] = useState<boolean>(false);

    const onInfoWindowClose = () => {
        setActiveMarker(null);
        setShowingInfoWindow(false);
    };

    // handles operation on marker click
    const onBasicMarkerClick = () => {
        alert('You clicked in this marker');
    };

    // handles operation on marker click
    const onMarkerClick = (props: any, marker: any, e: any) => {
        setActiveMarker(marker);
        setSelectedPlace(props);
        setShowingInfoWindow(true);
    };

    return (
        <div className="card-box">
            <h4 className="header-title mb-3">Clickable Markers</h4>
            <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                <Map
                    google={google}
                    zoom={18}
                    initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    zoomControlOptions={{
                        position: google.maps.ControlPosition.LEFT_TOP,
                    }}>
                    {/* basic marker */}
                    <Marker
                        title={'This is sweet home.'}
                        name={'Home sweet home!'}
                        onClick={onBasicMarkerClick}
                        position={{ lat: 21.56956, lng: 71.5892598 }}
                    />

                    {/* clickable marker */}
                    <Marker
                        name="Current location"
                        title={'Marker with InfoWindow'}
                        onClick={onMarkerClick}
                        position={{ lat: 21.56969, lng: 71.5893798 }}
                    />
                    <InfoWindow marker={activeMarker} onClose={onInfoWindowClose} visible={showingInfoWindow}>
                        <div>
                            <p>{selectedPlace.name}</p>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        </div>
    );
};

const GoogleMaps = ({ google }: MapContainerProps) => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Maps', path: '/ui/googlemaps' },
                    { label: 'Google Maps', path: '/ui/googlemaps', active: true },
                ]}
                title={'Google Maps'}
            />

            <Row>
                <Col lg={6}>
                    <BasicMap google={google} />
                </Col>

                <Col lg={6}>
                    <WithMarkers google={google} />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <LightStyledMap google={google} />
                </Col>
                <Col lg={6}>
                    <DarkStyledMap google={google} />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <WithPolyline google={google} />
                </Col>
                <Col lg={6}>
                    <WithPolygons google={google} />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <StreetViewMap google={google} />
                </Col>
                <Col lg={6}>
                    <ClickableMarkers google={google} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA',
})(GoogleMaps);
