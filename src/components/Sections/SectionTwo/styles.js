import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 64px;
    background-color: var(--sectionbg);
    color: var(--gray-24);

    h3 {
        padding-bottom: 56px;
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
        }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    }

    @media (max-width: 950px) {
        text-align: center;

        h3 {
            padding: 0 16px;
            margin-bottom: 16px;
        }

        p {
            padding: 0 16px;
        }
    }
`;

export const InputsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-top: 74px;
    padding-bottom: 64px;

    input {
        height: 48px;
        width: 232px;
        background: var(--white);
        border: 1px solid var(--gray-88);
        border-radius: 4px;
        padding-left: 20px;
    }

    button {
        margin-right: 32px;
        height: 48px;
        width: 96px;
        border: 0;
        border-radius: 4px;
        color: var(--white);
        background-color: var(--primary);
        cursor: pointer;
    }

    @media (max-width: 950px) {
        flex-direction: column;
        gap: 10px;
        padding-top: 32px;

        input {
            width: 328px;
        }

        button {
            margin-right: 0;
            width: 328px;

        }
    }
`;