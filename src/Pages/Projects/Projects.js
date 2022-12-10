import React from 'react';
import ProjectCard from './ProjectCard';
import img1 from '../../asset/img1.png';
import img2 from '../../asset/img2.png';
import img3 from '../../asset/img3.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: img1,
            name: 'Mobile Dokan',
            livesite: 'https://mobile-dokan-1a0ba.web.app/'
        },
        {
            id: 2,
            image: img2,
            name: 'Shikbe Shobai',
            livesite: 'https://shikbo-shobai.web.app/'
        },
        {
            id: 3,
            image: img3,
            name: 'Bug Buster',
            livesite: 'https://ephemeral-naiad-0f735c.netlify.app/'
        },

    ];
    return (
        <div className='mt-16'>
            <h2 className='text-2xl font-bold text-center'>My Projects</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-16'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;