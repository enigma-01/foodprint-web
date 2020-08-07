import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../../images/Logo.png";
import axios from "axios";
import createNew from "../../../images/new_location.png";
import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";

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


// GoogleMaps Config 
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

// Pertains to axios calls for photos + restaurant data
const apiUrl = "https://foodprint-prod.herokuapp.com/api";

// Call photos endpoint to obtain information about markers to be positioned on map
  // This should be executed on every re-render of the map (Changing to diff menu and back results in map)
  // const fetchRestaurants = async () => {
  //   try {
  //     await axios.get(`${apiUrl}/users/photos`, {headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}`}})
  //                                 .then((response) => {
  //                                   console.log(response.data);
  //                                   const restaurantsData = response.data;
  //                                   console.log(restaurantsData.photos);
  //                                   return restaurantsData.photos;
  //                                 })
                                  
  //   } catch (err) {
  //     console.log(err.message);
  //   }
    
  // }

const MapDiv = () => {

  const [markers, setMarkers] = React.useState([]);

  const addMarker = () => {
    
  }

  useEffect(() => {

    async function fetchRestaurants() {
      try {
        const fetchedData = await axios.get(`${apiUrl}/users/photos`, {headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}`}});
        const restaurantData = await fetchedData.data.photos;
        console.log(restaurantData);
                                    // .then((response) => {
                                    //   console.log(response.data);
                                    //   const restaurantsData = response.data;
                                    //   restaurantsData.photos;
                                    //   setMarkers([...markers, {
                                    //     lat: restaurantsData["retaurant_lat"],
                                    //     lng: restaurantsData["retaurant_lng"],
                                    //     id: restaurantsData["restauarnt_id"],
                                    //   }])
                                    // })
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchRestaurants();
    console.log("Worked!");
    console.log(markers);
  }, [])

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  })

  if (loadError) return "Error loading Foodprint - Please try again";
  if (!isLoaded) return "Loading Foodprint";

  // // Assign the markers to our array 
  // setMarkers = async () => {
    
  //   let restaurants = await fetchRestaurants();
  //   let restaurant;

  //   for (restaurant in restaurants){
  //     markers.push(
  //       {
  //         lat: restaurants[restaurant]["restaurant_lat"],
  //         lng: restaurants[restaurant]["restaurant_lng"],
  //         id: restaurants[restaurant]["restaurant_id"],
  //     })
  //   }
  //   console.log(markers);
  // }

  // SAVE FOR LATER - SEARCHBAR
  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

  return (
    <StyledMapDiv>
      <StyledLogo className="mainLogo" src={logo} alt="Foodprint Logo" />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={mapOptions}
      >
        {/* {markers.map((marker) => <Marker key={marker.id} 
                                         position={{lat: marker.lat, lng: marker.lng}}/>
                                         )} */}

      </GoogleMap>
    </StyledMapDiv>
  );
};

export default MapDiv;