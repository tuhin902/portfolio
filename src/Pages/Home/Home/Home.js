import React from 'react';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;