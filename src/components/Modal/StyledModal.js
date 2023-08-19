import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(116, 114, 114, 0.7);
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 541px;
  min-height: 742px;

  border-radius: 24px;
  background: white;

  img {
    border-radius: 14px;
    width: 100%;
    margin-bottom: 18px;
    object-fit: cover;
    object-position: bottom;
  }

  .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  .blur-up.lazyloaded {
    filter: blur(0);
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
  }
  .title-span {
    color: #3470ff;
  }
  .text-exposition {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;

    line-height: 1.5;
    max-width: 300px;
    margin: 0 0 14px 0;
  }
  .text-description {
    font-size: 14px;
    line-height: 1.43;
    margin: 0 0 24px 0;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    margin: 0 0 8px 0;
  }

  .text-accessories {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: 1.5;
    margin: 0 0 24px 0;
  }

  .field-conditions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 0 24px 0;
  }

  .field-conditions p {
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    background: #f9f9f9;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.24px;
    margin: 0;
  }
  .age,
  .field-conditions span {
    color: #3470ff;
  }
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
