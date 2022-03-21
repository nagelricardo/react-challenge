import styled from 'styled-components';

export const BannerContainer = styled.div`
 height: 616px;

 background-image: url('./headerBg.svg'),
    linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 540px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 120px;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;

export const FirstSectionBanner = styled.section`
    color: var(--white);
    
  h2 {
    font-weight: 500;
    font-size: 40px;

    width: 490px;
    line-height: 48px;
    letter-spacing: -1px;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    width: 584px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 32px;
  } 

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    margin-left: 18px;
  }

   @media (max-width: 800px) {
     display: flex;
     flex-direction: column;
     align-items: center;

    h2 {
      width: 272px;
      text-align: center;
      font-size: 28px;
      line-height: 32px;
    }

    p {
      width: 328px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  }
`;

export const BannerSecondImage = styled.span`
   @media (max-width: 900px) {
    display: none;
  }
`;
