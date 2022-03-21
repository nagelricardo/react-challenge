import Image from 'next/image';
import React from 'react';

import { Container, BoxImage, ReadHapu } from "./styles";

export function SectionThree() {
    return (
        <Container>
            <BoxImage>
                <Image src="/imageSection3.svg" width={456} height={336} alt="Demonstration of payment" />
            </BoxImage>

            <div>
                <h2>
                    Shared payments made simple
                </h2>
                <p>
                    Sometimes it’s hard enough just sharing a restaurant bill.
                    Try sharing that bill week in, week out and you might
                    encounter more than a few snares. But not with Hapu. Simply
                    set your rates and our automated payment system takes care
                    of the rest. You need never talk money or who owes what.
                </p>
                <ReadHapu>
                    <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>   
                </ReadHapu>
            </div>
        </Container>
    );
}
