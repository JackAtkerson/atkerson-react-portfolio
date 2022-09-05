import React from 'react';
import aboutImage from '../../assets/images/about_headshot.jpg'

function About() {
    return (
        <section className='my-5'>
            <h1 id='about'>This is me</h1>
            <img src={aboutImage} className='my-2' style={{ width:'100%' }} alt='Headshot of Jack Atkerson holding balloons' />
        </section>
    );
}

export default About;