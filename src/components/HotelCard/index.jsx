import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import hotelfk from '../../assets/hotel-fake.png'
import Skeleton from '../Skeleton';
import { HotelST, HotelInfo, HotelPhoto , Title, Address } from './styles';

const HotelCard = ({ hotel, onClick }) => {
const [imageLoaded, setImageLoaded] = useState(false)

return (
<HotelST onClick={onClick}>
    <HotelInfo>
        <Title>{hotel.name}</Title>
        <ReactStars count={5} isHalf value={hotel.rating} edit={false} activeColor="#e7711c" />
        <Address>{hotel.vicinity || hotel.formatted_address}</Address>
    </HotelInfo>
    <HotelPhoto 
    imageLoaded={imageLoaded}
    src={hotel.photos ? hotel.photos[0].getUrl() : hotelfk}
    onLoad={()=> setImageLoaded(true)}
    alt="Foto do Hotel"
    />
    {!imageLoaded && <Skeleton width="100px" height="100px"/>}
    </HotelST>
);
};
export default HotelCard;