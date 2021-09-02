import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
display: flex;
flex-direction: row;  
`;

export const Container = styled.section`
background-color: ${(props) => props.theme.colors.background};
width: 360px;
height: 100vh;
overflow-y: auto;
background-color: #00000014;
`;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding: 15px;

`;
export const Logo= styled.img`
margin-bottom:-60px;
margin-top: -60px;

`;

export const Map = styled.div`
background-color: red;
width: 500px;

`;

export const Carousel = styled(Slider)`
.slick-slide{
    margin-right: 30px;
}
`;

export const CarouselTitle = styled.h1`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font weight: bold;
line-height: 29px;
margin:16px;

`;

export const ModalTitle = styled.p`
font-family: ${(props) => props.theme.fonts.regular};
margin-bottom: 10px;
font-size: 40px;
font weight: bold;
`;

export const StatusHotel = styled.p`
font-family: ${(props) => props.theme.fonts.regular};
margin-top: 30px;
font-size: 20px;
font weight: bold;
`;