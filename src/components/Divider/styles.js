import styled from 'styled-components';

export const Container = styled.div`
    height: 2px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--sectionbg);
`;

export const Line = styled.div`
    height: 2px;
    width: 784px;
    background-color: var(--gray-88);

    @media (max-width: 800px) {
        width: 628px;
    }

    @media (max-width: 600px) {
        width: 428px;
    }

    @media (max-width: 500px) {
        width: 328px;
    }
`;