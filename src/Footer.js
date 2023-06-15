import React, { useState } from 'react';



function Footer() {
    return (
        <>

            <div className="bg-gray-100 mt-[100px] footer">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                    <div>
                        <h2 className="heading">
                            We're a brands <br /> <span>best friend</span>
                        </h2>

                        <a className="animate">Let's talk</a>
                    </div>

                    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap">
                        <div className="p-5 w-full md:w-48">
                            <div className="text-xs uppercase text-[#19293A] text-[21px] font-medium">EXPLORE</div>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Services</a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Work</a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">About</a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Blog</a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Careers</a>
                        </div>
                        <div className="p-5 w-full md:w-48">
                            <div className="text-xs uppercase text-[#19293A] text-[21px] font-medium">SERVICES</div>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Brand</a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Development</a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Marketing</a>
                        </div>
                        <div className="p-5 w-full md:w-48">
                            <div className="text-xs uppercase text-[#19293A] text-[21px] font-medium">QUESTIONS?</div>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Call Us <br /> 0121 345 678 </a>
                            <a className="my-3 block text-[#506473] text-[18px]" href="/#">Email Us <br /> info@digitalspaniel.co.uk

                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;