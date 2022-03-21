import Image from 'next/image';
import React from 'react';

import { Card, Container, BoxImage, GetStarted } from "./styles";

export function SectionOne() {
    return (
        <>
            <Card>
                <Image src="/profileImage.svg" width={56} height={56} alt="Profile avatar" />
                <a href="">Sarah’s day care available now in North Sydney</a>
                <h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
            </Card>
            <Container>
                <div>
                    <h2>
                        Share your home, nanny and costs
                    </h2>
                    <p>
                        You have a fantastic home, a fantastic nanny and wouldn’t 
                        cutting your costs in half be, well, fantastic?! If only it 
                        was easy to connect with other parents to share your costs? 
                        Well now it is, with Hapu. <a href='#'>Hapu means tribe</a> and it’s our 
                        foundational 3 tribal principles that empowers you to create 
                        and manage your own tribe. A tribe that together has the 
                        power to create new affordable solutions in childcare that 
                        work for you and your community.
                    </p>
                    <GetStarted>
                        <a href="#">Ready to get started?</a>
                    </GetStarted>
                </div>
                <BoxImage>
                   <Image src="/imageSection1.svg" width={584} height={392} alt="Demonstration costs image" />
                </BoxImage>
            </Container>
        </>
    );
}
