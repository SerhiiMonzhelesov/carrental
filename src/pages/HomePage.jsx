import StyledHomePage, { ContainerHome, StyledLink } from './StyledHomePage';

export default function HomePage() {
  return (
    <>
      <ContainerHome>
        <StyledHomePage>
          <h1> CAR RENTAL</h1>
          <p>
            Our website provides car rental search services. Here you can choose
            a car according to various criteria, such as the make or model of
            the car, its mileage and the rental price per hour. In addition, you
            can see the equipment and functionality of the car. To view a
            complete list of cars, go to the
            <StyledLink to="/catalog"> Catalog page</StyledLink>.
          </p>
        </StyledHomePage>
      </ContainerHome>
    </>
  );
}
