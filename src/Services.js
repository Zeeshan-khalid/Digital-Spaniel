import React, { useState } from 'react';
import backgroundImage from './assets/Images/Spaniel.png';

function Services() {
    return (
        <section id="service" className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen services">
            <div className="md:hidden hidden">
                <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            </div>
            <div className="flex items-center justify-center p-4">
                <div className="max-w-[430px]">
                    <h4>BRAND, DEV, ECOM, MARKETING</h4>
                    <h2>
                        We unleash <br />
                        <span>business potential</span>
                    </h2>
                    <p>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
                    <a href="" className='animate'>Let’s talk</a>
                </div>
            </div>
            <div className="hidden md:block bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </section>
    );
}

export default Services;
