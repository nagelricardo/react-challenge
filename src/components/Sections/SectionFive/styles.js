import styled from 'styled-components';

export const Container = styled.section`
    background-color:  var(--sectionbg);
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 96px;
    color: var(--gray-24);

    h2 {
        padding: 40px 0px 40px 0px;
        font-weight: 500;
        font-size: 28px;
        line-height: 32px;
    }

    p {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        width: 50%;
        margin-bottom: 120px ;
    }

    @media (max-width: 550px) {
       width: 100%;
        
       h2 {
           text-align: center;
            font-size: 22px;
       } 

       p {
        width: 328px;
       }
    }
`;


