import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <div className='content has-text-centered'>
                <p>
                    <a href="https://www.linkedin.com/in/jack-atkerson-79a505132/" target="_blank" rel="noreferrer">
                        <img className='ftr-link' src={require('../../assets/images/linkedin.png')} alt='LinkedIn'></img>
                    </a>

                    <a href="https://github.com/JackAtkerson" target="_blank" rel="noreferrer">
                        <img className='ftr-link' src={require('../../assets/images/github.png')} alt='GitHub'></img>
                    </a>

                    <a href='https://www.instagram.com/jack_atkerson/' target='_blank' rel='noreferrer'>
                        <img className='instagram ftr-link' src={require('../../assets/images/instagram.png')} alt='Instagram'></img>
                    </a>

                    <br />
                    
                    <span>🔥Website by Jack, for Jack🔥</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;