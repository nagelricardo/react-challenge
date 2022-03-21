import styled from 'styled-components';

export const Card = styled.section`
    height: 112px;
    background-color: var(--white);
    
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-88);

    a {
        padding-left: 32px;
        color:  var(--secondary);
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

    h4 {
        font-family: Helvetica, sans-serif;
        margin-left: 5px;
        font-weight: 600;
        font-size: 16px;
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 216px;
        flex-direction: column;

        a {
            margin-top: 16px;
            margin-bottom: 12px;
            padding: 0 74px;
            text-align: center;
        }

        h4 {
            font-size: 14px;
        }
    }
`;

export const Container = styled.section`
    background-color: var(--sectionbg);
    height: 632px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        padding-left: 128px;
    }

    h2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 32px;
        color: var(--gray-24);
    }

    p {
        width: 444px;
        margin: 40px 0;
        text-align: justify;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: #4A4A4A;
    }

    @media (max-width: 1150px) {
        width: 100%;
        height: 792px;
        flex-direction: column-reverse;
        padding: 0 16px;

        div {
        padding-left: 0px;
        }

        h2 {
            font-size: 22px;
            text-align: center;
            padding: 0 71px;
        }

        p {
            text-align: center;
            padding: 0 16px;
        }  
    }
`;

export const GetStarted = styled.p`
    @media (max-width: 1150px) {
        padding: 0 50px;
        margin-bottom: 64px;
    }
`;

export const BoxImage = styled.div`
    margin-right: 128px;

    @media (max-width: 1150px) {
        margin-right: 0;
        margin-bottom: 24px;
    }
`;