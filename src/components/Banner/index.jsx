import React from 'react';
import { Header } from "../Header";
import { BannerContainer } from "./styles";
import { Container, FirstSectionBanner, BannerSecondImage } from "./styles";

import Image from 'next/image';

export function Banner() {
    return (
        <BannerContainer>
            <Header />
            <Container>
                <FirstSectionBanner>
                    <h2>
                        Easily create or join a local nanny share with Hapu
                    </h2>
                    <p>
                        Hapu is Airbnb for nanny share.
                        Share your home, nanny and costs and create new flexible,
                        affordable solutions in childcare.
                    </p>
                    <div>
                        <Image src="/playButton.svg" width={48} height={48} alt="Play icon" />
                        <span>See hapu in action (27 seconds)</span>
                    </div>
                </FirstSectionBanner>
                <BannerSecondImage>
                    <Image src="/imageHeader.svg" width={316} height={290} alt="Using Hapu" />
                </BannerSecondImage>
            </Container>
        </BannerContainer>
    );
}



