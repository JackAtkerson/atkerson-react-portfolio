import React from 'react';
import aboutImage from '../../assets/images/about_headshot.jpg'

function About() {
    return (
        <section className='is-ancestor'>
            <h1 className='section-title'>About Me</h1>
            <div className='is-parent container about-me'>
                <div className='bio-pic'>
                    <img src={aboutImage} alt='Jack Atkerson' width='3000' height='500' />
                </div>

                <div className='bio'>
                    <p>My name is Jack Atkerson and I am an aspiring web developer based out of Nashville, Tennessee. I graduated from Middle Tennessee State University in the Spring of 2021 with a Bachelors of Science in Audio Production with an emphasis on Studio Engineering. I am almost finished with a coding bootcamp through Vanderbilt University, and have experience developing full stack applications using the MERN stack</p>
                </div>
            </div>
        </section>
    );
}

export default About;