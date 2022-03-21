import styled from 'styled-components';

export const BoxImage = styled.div`
    margin-left: 228px;

    @media (max-width: 1500px) {
        margin-left: 128px;
        margin-bottom: 40px;
        padding: 0 24px;
    }

    @media (max-width: 1400px) {
        margin-left: 64px;
        margin-bottom: 40px;
        padding: 0 24px;
    }

    @media (max-width: 1300px) {
        margin-left: 0;
        margin-bottom: 40px;
        padding: 0 24px;
    }
`;

export const Container = styled.section`
    background-color: var(--sectionbg);
    height: 528px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        margin-right: 228px;
    }
    h2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 32px;
        color: var(--gray-24);
    }

    p {
        width: 484px;
        margin: 40px 0;
        text-align: justify;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: #4A4A4A;
    }

    @media (max-width: 1300px) {
        width: 100%;
        height: 820px;
        flex-direction: column;
        padding-top: 64px;

        h2 {
            font-size: 22px;
            padding: 0 67px;
            margin-top: 40px;
            text-align: center;
        }

        p {
            padding: 0 16px;
            text-align: center;
            margin-right: 0;
        }

        div {
            width: 100%;
            margin: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const ReadHapu  = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration: underline;
    color: var(--secondary);
    
    @media (max-width: 1300px) {
        padding: 0 50px;
        margin-bottom: 64px;
    }
`;
