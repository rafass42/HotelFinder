import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setHotels, setHotel } from '../../redux/modules/hotels';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { hotels } = useSelector((state) => state.hotels);
  const { google, query, placeId } = props;

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setHotels([]));

      const request = {
        location: map.center,
        radius: '200',
        type: ['hotel'],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setHotels(results));
        }
      });
    },
    [dispatch, google]
  );

  const getDetails = useCallback(
    (placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setHotel(null));

      const request = {
        placeId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setHotel(place));
        }
      });
    },
    [google, map, dispatch]
  );

  useEffect(() => {
    if (query) {
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  useEffect(() => {
    if (placeId) {
      getDetails(placeId);
    }
  }, [placeId, getDetails]);

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['hotel'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setHotels(results));
      }
    });
  };

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      zoom={15}
      {...props}>
      {hotels.map((hotel) => (
        <Marker
          key={hotel.place_id}
          name={hotel.name}
          position={{
            lat: hotel.geometry.location.lat(),
            lng: hotel.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
