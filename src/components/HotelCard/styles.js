import styled from 'styled-components';

export const HotelST = styled.div`

  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover{
      background-color:  ${(props) => props.theme.colors.background};
      border-left-color:  ${(props) => props.theme.colors.primary};
  }
`;

export const HotelInfo = styled.div`
display: flex;
flex-direction: column;

`;

export const Title = styled.span`
font-family: ${(props) => props.theme.fonts.regular };
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
`;

export const Address = styled.span`
font-family: ${(props) => props.theme.fonts.regular };
color: ${(props) => props.theme.colors.text};
font-size: 15px;
font-weight: 15px;
line-height: 15px;
margin-bottom: 10px;
margin-top: 10px;
`;


export const HotelPhoto = styled.img`
display: ${(props)=> (props.imageLoaded ? 'block' : 'none')}
width: 100px;
height: 100px;
object-fit: cover;
border-radius: 6px;

`;