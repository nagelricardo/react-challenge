import styled from 'styled-components';

export const Container = styled.section`
    background-color:  var(--sectionbg);
    height: 876px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 96px;

    h2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 32px;
        color: var(--gray-24);
    }

    p {
        margin: 40px 328px 40px 328px;
        text-align: center;
        width: 784px;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: var(--gray-24);
    }
       
    div {
        margin: 64px 228px 104px 228px;
    }

    @media (max-width: 1100px) {
        div {
            margin: 32px 128px 58px 128px;
        } 
    }

    @media (max-width: 900px) {
        div {
            margin: 16px 64px 29px 64px;
        } 
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 476px;
        padding-top: 64px;

        h2 {
            font-size: 22px;
            padding: 0 58px;
            text-align: center;
        }

        p {
            width: 328px;
            padding: 0 16px;
            text-align: center;
        }

        div {
            display: none;
        } 
    }
`;

export const ReadHapu  = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration: underline;
    color: var(--secondary);

    @media (max-width: 800px) {
        padding: 0 50px; 
        margin-bottom: 64px;
        text-align: center;
    }
`;