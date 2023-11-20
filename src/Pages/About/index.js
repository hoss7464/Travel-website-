import React from 'react';
import { AboutContainer } from './AboutElements';
import {Wrapper1, Wrapper2} from "../../Core-Ui/ActiveAreaWrappers"
import AboutSection1 from './AboutSection1';
import AboutSection2 from './AboutSection2';
import AboutSection3 from './AboutSection3';

const About = () => {
    return (
        <>
        <AboutContainer>
            <Wrapper1>
              <AboutSection1 />
            </Wrapper1>
            <Wrapper2>
              <AboutSection2 />
              <AboutSection3 />
            </Wrapper2>
        </AboutContainer>
        </>
    );
};

export default About;