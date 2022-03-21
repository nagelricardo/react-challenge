import styled from 'styled-components';

export const HeaderContainer = styled.header`
     padding-left: 20px;
     display: flex;
     align-items: center;
     justify-content: space-between;

    button {
        margin-right: 32px;
        height: 2.75rem;
        width: 234px;
        border: 0;
        border-radius: 0.25rem;
        color: var(--white);
        background-color: var(--primary);
        cursor: pointer;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const MenuOption = styled.a`
    font-size: 14px;
    color: var(--white);
    margin-right: 32px;
    text-decoration: none;

    @media (max-width: 900px) {
     display: none;   
    }   
`;