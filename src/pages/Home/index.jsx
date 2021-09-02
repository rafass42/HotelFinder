/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import hotelfk from '../../assets/hotel-fake.png';
import { Card, HotelCard, Map, Modal, Loader, Skeleton } from '../../components';

import {StatusHotel, Container, Carousel, Search, Logo, Wrapper, CarouselTitle, ModalTitle } from './styles';


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [placeId, setPlaceId] = useState(null);
  const { hotels, hotelSelected } = useSelector((state)=> state.hotels);

  const [modalOpened, setModalOpened] = useState(false);
  
  const settings = {
    dots: false,
    infitite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e){
    if(e.key ==='Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId){
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return(  
  <Wrapper>
    <Container>
      <Search>
        <Logo src={logo} alt="logo da empresa" />
        <TextField
          outlined
          label="Pesquisar "
          trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
          <Input value={inputValue}
           onKeyPress={handleKeyPress} 
           onChange={(e) => setInputValue(e.target.value)}
            />
            
        </TextField>
        {hotels.length > 0 ? (
          <>

        <CarouselTitle>Em sua Area</CarouselTitle>
          <Carousel {...settings}>
          {hotels.map((hotel)  =>(
            <Card 
            key={hotel.place_id}
            photo={hotel.photos ? hotel.photos[0].getUrl() : hotelfk} 
            title={hotel.name} />
          ))}
        </Carousel> 

          </>
        ) : (
           <Loader />
        )} 
       </Search>
       {hotels.map((hotel) => (
         <HotelCard 
         onClick={()=> handleOpenModal(hotel.place_id)}
         hotel={hotel}/>
       ))}
    </Container>
    <Map query={query} placeId={placeId}/>
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
      {hotelSelected ? (
        <>
        <ModalTitle>{hotelSelected?.name}</ModalTitle>
        <p>{hotelSelected?.formatted_phone_number}</p>
        <p>{hotelSelected?.formatted_address}</p>
        
        <StatusHotel>
          {hotelSelected?.opening_hours?.open_now 
          ? 'ABERTO AGORA'
          : 'FECHADO NO MOMENTO'          
        }
        </StatusHotel> 
        </>
      ) : (
        <>
        <Skeleton width="10px" height="10px" />
        <Skeleton width="10px" height="10px" />
        <Skeleton width="10px" height="10px" />
        <Skeleton width="10px" height="10px" />
                
        </>
      )}
        
    </Modal> 
  </Wrapper>    
    );   
  };


export default Home;
