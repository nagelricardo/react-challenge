import Image from 'next/image';
import React from 'react';

import { Container } from "./styles";

export function SectionFive() {
    return (
        <Container>
            <Image src="/imageSection5.svg" width={216} height={96} alt="New features illustrations" />
            <h2>
                Coming soon: Nanny Share Daily Diary!
            </h2>
            <p>
                With the Hapu daily diary your nanny will be able to update
                you and your sharers with photos and commentary of the day.
                You and sharers will receive notifications and you’ll be
                able to login to view the daily adventures fo your little
                ones. We can’t wait!
            </p>
        </Container>
    );
}
