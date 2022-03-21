import styled from 'styled-components';

export const FooterContainer = styled.section`
   background-color: var(--white);

   @media (max-width: 950px) {
       width: 100%;
   }
`;

export const FirstContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    color: var(--gray-24);

    h2 {
        font-size: 28px;
        font-weight: 500;
        text-align: center;
        line-height: 32px;
        margin-bottom: 16px;
    }

    p {
        font-size: 18px;
        line-height: 24px;
        text-align: center;
    }

    a {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration: underline;
        color: var(--secondary);
    }
`;

export const Button = styled.div`
    padding: 10px 22px;
    border-radius: 4px;
    background: var(--secondary);
    margin: 32px 0;
    display: flex;
    align-items: center;

    cursor: pointer;
    border: 0;

    div {  
        color: var(--white);

        h4 {
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            margin-left: 21px; 
        }

        p {
            font-size: 12px;
            line-height: 16px;
        }
    } 
`;

export const FooterBottomBar = styled.section`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 950px) {
        height: 260px;
        flex-direction: column;
    }

`;

export const ContentBottomBar = styled.div`
    display: flex;
    align-items: center;
      
    ul {
        display: inline;
        align-items: center;
        justify-content: space-around;
    }

    li {
        list-style-type: none;
        margin: 0 45px;
        display: inline;
    }

    a {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: var(--gray-24);
        text-decoration: none;
    }   

    @media (max-width: 700px) {
        ul {
            display: grid;
            grid-template-columns: repeat(2, 2fr);
            gap: 10px;
            text-align: center;
        }

        li {
            margin: 5px;
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const StyleIcons = styled.div`
    padding-top: 4px;
    margin-left: 16px;
    margin-right: 16px;
`;

export const Copyright = styled.div`
    font-size: 14px;
    color: var(--gray-24);
    text-align: center;
    padding: 40px 0;
    opacity: 0.6;

    @media (max-width: 700px) {
        font-size: 14px;
        height: 64px;
        border-top: 1px solid var(--gray-88);
        padding: 24px 20px;
    }
`;