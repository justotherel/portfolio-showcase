import React from 'react'
import {
    ServicesContainer, 
    ServicesWrapper, 
    ServicesH1, 
    ServicesH2, 
    ServicesCard, 
    ServicesIcon, 
    ServicesP } from './ServicesElements';

import Icon1 from '../../images/img1.svg'
import Icon2 from '../../images/img2.svg'
import Icon3 from '../../images/img3.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>H1 title text</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>H2 title text</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>H2 title text</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>H2 title text</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
