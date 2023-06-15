import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import image1 from './assets/Images/1.png';
import image2 from './assets/Images/2.png';
import image3 from './assets/Images/3.png';
import image4 from './assets/Images/4.png';
import image5 from './assets/Images/5.png';

const projectsData = [
    { id: 1, category: 'All', image: image1 },
    { id: 2, category: 'Branding', image: image2 },
    { id: 3, category: 'Web Design', image: image3 },
    { id: 4, category: 'Marketing', image: image4 },
    { id: 5, category: 'Marketing', image: image5 },
];

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Branding', 'Web Design', 'Marketing'];
    const categoryIndex = categories.indexOf(selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handlePrevCategory = () => {
        const prevIndex = categoryIndex === 0 ? categories.length - 1 : categoryIndex - 1;
        setSelectedCategory(categories[prevIndex]);
    };

    const handleNextCategory = () => {
        const nextIndex = categoryIndex === categories.length - 1 ? 0 : categoryIndex + 1;
        setSelectedCategory(categories[nextIndex]);
    };

    const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter(project => project.category === selectedCategory);

    const renderProjects = filteredProjects.map((project) => {
        const gridColumnStyle = project.id === 4 ? 'span 2' : 'auto';
        return (
            <div key={project.id} className="project-item" style={{ gridColumn: gridColumnStyle }}>
                {project.id === 2 && (
                    <div className="image-overlay">
                        <div>
                            <h4>Make Ideas Happen</h4>
                            <p>A local paper with big ideas needed a sharp new brand to inspire readers.</p>
                            <a>Full Project</a>
                        </div>
                    </div>
                )}
                <img src={project.image} alt={`Project ${project.id}`} className="w-full" />
            </div>
        );
    });

    return (
        <div id='project' className="cusbg projects">
            <h2 className="heading">
                Some of our <br /> <span>recent projects</span>
            </h2>

            <div className="categories mb-10">

                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                        style={{
                            borderBottom: selectedCategory === category ? '3px solid #C0345E' : '3px solid #ccc',
                            color: selectedCategory === category ? '#19293A' : '#555',
                            fontWeight: selectedCategory === category ? 'bold' : 'normal',
                        }}
                    >
                        {category}
                    </button>
                ))}

            </div>

            <div className="project-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {renderProjects}
            </div>

            <div className="flex justify-between mt-4">
                <a className="animate">See all work</a>
                <div className="flex ml-4">
                    <button className="category-nav mr-5" onClick={handlePrevCategory}>
                        <BiChevronLeft
                            size={40}
                            color="#506473"
                            style={{
                                backgroundColor: "#50647380",
                            }}
                        />
                    </button>
                    <button className="category-nav" onClick={handleNextCategory}>
                        <BiChevronRight
                            size={40}
                            color="#ffffff"
                            style={{
                                backgroundColor: "#19293A",
                            }}
                        />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Projects;
