import React from 'react';
import Image from 'next/image';

import {
    FooterContainer,
    FirstContent,
    Button,
    FooterBottomBar,
    ContentBottomBar,
    Icons,
    StyleIcons,
    Copyright
} from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <FirstContent>
                <h2>
                    Become a nanny share host
                </h2>
                <p>
                    Takes less than 5 minutes to get started
                </p>
                <Button>
                    <Image src="/calendar.svg" width={30} height={30} alt="Calendar image" />
                    <div>
                        <h4>Create Your Nanny Share</h4>
                        <p>Takes less than 5 minutes</p>
                    </div>
                </Button>
                    <a href="#">Or browse local nanny-shares</a>
            </FirstContent>
            <FooterBottomBar>
                    <Image src="/logo.svg" width={64} height={24} alt="Hapu logo" />                
                <ContentBottomBar>
                        <ul>
                            <a href=""><li>Share Your Nanny</li></a>
                            <a href=""><li>Our Story</li></a>
                            <a href=""><li>Blog</li></a>
                            <a href=""><li>Terms and Privacy</li></a>
                        </ul>
                </ContentBottomBar>
                <Icons>
                        <Image src="/facebook.svg" width={45} height={45} alt="Facebook logo" />
                    <StyleIcons>
                        <Image src="/twitter.svg" width={45} height={45} alt="Twitter logo" />
                    </StyleIcons>
                        <Image src="/instagram.svg" width={45} height={45} alt="Instagram logo" />

                </Icons>
            </FooterBottomBar>
                <Copyright>
                    <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
                </Copyright>
        </FooterContainer>
    );
}
