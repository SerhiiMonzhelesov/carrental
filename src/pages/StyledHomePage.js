import styled from 'styled-components';
import backGround from '../assets/images/bg-rental-avto-homepage.jpg';
import { Link } from 'react-router-dom';

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d9dce5;
  padding: 0 80px 0 80px;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
    line-height: 2;
  }
`;

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${backGround});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledLink = styled(Link)`
  color: #d9dce5;
`;
export default StyledHomePage;
