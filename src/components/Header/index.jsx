import Image from 'next/image';
import React from 'react';

import { HeaderContainer, LogoContainer, MenuOption } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
                <LogoContainer>
                <Image src="/badge.svg" width={48} height={64} alt="Hapu Badge"/>
                <nav>
                    <MenuOption href="#">  Create Your Nanny Share</MenuOption>
                    <MenuOption href="#">  Browse Shares</MenuOption>
                    <MenuOption href="#">  Our Story</MenuOption>
                </nav>
                </LogoContainer>
                <div>
                    <button>Become a Nanny Share Host</button>
                    <MenuOption href="#">Sign In</MenuOption>
                </div>
        </HeaderContainer>
    );
}