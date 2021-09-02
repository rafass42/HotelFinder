export const Types = {
    SET_HOTELS: 'hotels/SET_HOTELS',
    SET_HOTEL: 'hotels/SET_HOTEL',
  };
  
  const initialState = {
    hotels: [],
    hotelSelected: null,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.SET_HOTELS:
        return { ...state, hotels: action.payload };
      case Types.SET_HOTEL:
        return { ...state, hotelSelected: action.payload };
      default:
        return state;
    }
  }
  
  export function setHotels(hotels) {
    return {
      type: Types.SET_HOTELS,
      payload: hotels,
    };
  }
  
  export function setHotel(hotel) {
    return {
      type: Types.SET_HOTEL,
      payload: hotel,
    };
  }
  