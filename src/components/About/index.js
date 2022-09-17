import React from 'react';
import aboutImage from '../../assets/images/about_headshot.jpg'

function About() {
    return (
        <section className='is-ancestor'>
            <div className='is-parent container is-justify-content-center'>
                <div className='is-child'>
                    <h1>This is Me</h1>
                    <img src={aboutImage} alt='Jack Atkerson' />
                </div>

                <div>
                    <p className='bio'>Bio Text goes here</p>
                </div>
            </div>
        </section>
    );
}

export default About;