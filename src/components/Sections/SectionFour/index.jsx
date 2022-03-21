import Image from 'next/image';
import React from 'react';

import { Container, ReadHapu } from "./styles";

export function SectionFour() {
    return (
        <Container>
            <h2>
                A framework built for the long term
            </h2>
            <p>
                Childcare is for the long term. And you need a framework 
                you can count on that gives your share long term viability 
                and success. That’s why we’ve defined Hapu around our three
                tribal principles; clearly defined process, transparency 
                over money and equality of participation.
            </p>
            <ReadHapu href="#">Read how Hapu’s tribal background defines our app </ReadHapu>
            <div>
                <Image src="/imageSection4.svg" width={984} height={392} alt="Demonstration image of nanny billing dashboard" />
            </div>
        </Container>
    );
}
