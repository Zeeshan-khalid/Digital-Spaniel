import React, { useState } from 'react';
import { BiChevronRightCircle } from 'react-icons/bi';



function Work() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleLinkHover = (linkIndex) => {
        setHoveredLink(linkIndex);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };
    return (
        <div id="work" className="grid grid-cols-1 md:grid-cols-2 gap-2 cusbg work">
            <div>
                <h2 className='heading'>What are <br /> <span> we capable of</span></h2>
                <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>
                <a className='animate'>Our process</a>

            </div>
            <div className='brand pl-14'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <h3>BRAND</h3>
                        <ul>
                            <li
                                onMouseEnter={() => handleLinkHover(0)}
                                onMouseLeave={handleLinkLeave}
                            >
                                Brand Strategy
                                {hoveredLink === 0 && (
                                    <BiChevronRightCircle
                                        className="ml-2 bg-[#506473] rounded-full relative top-[2px]"
                                        color="#ffffff"
                                        size={24}
                                    />
                                )}
                            </li>
                            <li
                                onMouseEnter={() => handleLinkHover(1)}
                                onMouseLeave={handleLinkLeave}
                            >
                                Logo & Name
                                {hoveredLink === 1 && (
                                    <BiChevronRightCircle
                                        className="ml-2 bg-[#506473] rounded-full relative top-[2px]"
                                        color="#ffffff"
                                        size={24}
                                    />
                                )}
                            </li>
                            <li
                                onMouseEnter={() => handleLinkHover(2)}
                                onMouseLeave={handleLinkLeave}
                            >
                                Identity & Collateral
                                {hoveredLink === 2 && (
                                    <BiChevronRightCircle
                                        className="ml-2 bg-[#506473] rounded-full relative top-[2px]"
                                        color="#ffffff"
                                        size={24}
                                    />
                                )}
                            </li>
                        </ul>

                        <h3 className='mt-[63px]'>DEVELOPMENT</h3>
                        <ul>
                            <li>eCommerce</li>
                            <li>Web Development</li>
                            <li>Mobile Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h3>MARKETING</h3>
                        <ul>
                            <li>Digital</li>
                            <li>Market Research</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
