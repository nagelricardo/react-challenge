import React, { useState } from 'react';
import { Loading } from '../../Loading';
import { Container, InputsContainer } from "./styles";

export function SectionTwo() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);

    async function handleSendInfo(e) {
        try {
            e.preventDefault();
            setLoading(true);

            const response = await axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
                name,
                email
            });

            console.log(response);

            if (response.status === 200) {
                alert('Dados enviados com sucesso!')
            } else {
                throw new Error 
            }

            setLoading(false);

        } catch (err) {
            setLoading(false);
            alert('Servidor fora do ar, tente novamente mais tarde!')
        }
    }
    
    return (
        <Container>
            <h3>
                Are you a parent without a nanny and looking to share?
            </h3>
            <p>
                Leave us your name and email and we’ll update you as 
                soon as a share becomes available in your area!
            </p>

            <InputsContainer>
                <input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Your e-mail" onChange={(e) => setEmail(e.target.value)} />
                <button type="button" onClick={handleSendInfo}>
                    {loading ? <Loading /> : 'send'}
                </button>
            </InputsContainer>
        </Container>
    );
}
