import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../images/Logo.png";
import axios from "axios";
import createNew from "../../../images/new_location.png";
import * as restaurantData from "./user-data-example.json";

import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

const StyledLogo = styled.img`
  height: 40px;
  border: none;
  background: transparent;
  z-index: 2;
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
`;

const StyledMapDiv = styled.div`
  height: 780px;
  width: 100%;
  min-width: 900px;
  margin: 0 auto;
`;

const StyledMarkerDiv = styled.div`
  height: 400px;
  width: 500px;
`;

const libraries = ["places"];
const mapContainerStyle = {
  width: `100vw`,
  height: `90vh`,
};
const center = {
  lat: 43,
  lng: -79,
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MapDiv = () => {
  // Changing background
  useEffect(() => {
    const currentLocation = window.location.pathname;
    console.log(currentLocation);
  }, []);

  //const [restaurantMarkers, setRestaurantMarkers] = React.useState([]);
  //const [selectedMarker, setSelectedMarker] = React.useState(null);

  // const onMapClick = React.useCallback((event) => {
  //     setMarker(current => [...current, {
  //         lat: event.latLng.lat(),
  //         lng: event.latLng.lng(),
  //         //time: new Date();
  //     }])
  // }, [])

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <StyledMapDiv>
      <LoadScript googleMapsApiKey="" libraries={libraries}>
        <StyledLogo className="mainLogo" src={logo} alt="Foodprint Logo" />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={mapOptions}
          // onClick={onMapClick}
          // onLoad={onMapLoad}
        >
          {/* { {markers.map((marker) => (
                    <Marker 
                        key={restaurant.properties.idKey} 
                        position={{lat: restaurant.properties.coordinates[0], lng: restaurant.properties.coordinates[1]
                        }}
                        onClick={() => {
                            setSelectedMarker(marker);
                        }}
                    />
                ))} } */}

          {/* {restaurantData.restaurants.map(restaurant => (
                    <Marker 
                        key={restaurant.properties.idKey} 
                        position={{lat: restaurant.properties.coordinates[0], lng: restaurant.properties.coordinates[1]
                        }}
                        onClick={() => {
                            setSelectedMarker(marker);
                        }}
                    />
                ))} */}
        </GoogleMap>
      </LoadScript>
    </StyledMapDiv>
  );
};

export default MapDiv;
