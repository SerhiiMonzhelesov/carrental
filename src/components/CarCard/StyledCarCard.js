import styled from 'styled-components';

export const StyledCarCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 274px;
  justify-content: space-between;

  p {
    margin: 0;
  }

  span {
    color: #3470ff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  h3 {
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
  }

  .wrapper-checkbox {
    position: absolute;
    right: 0;
    top: 0;
  }

  .title-wrapper {
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p.description {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 28px;
  }
`;

export const StyledThumbImg = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  background-image: url(${props => props.$urlimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 14px;

  img {
    width: 100%;
    height: 268px;

    object-fit: cover;
    object-position: bottom;
  }
`;
