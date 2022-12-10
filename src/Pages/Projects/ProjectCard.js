import React from 'react';

const ProjectCard = ({ project }) => {
    const { livesite, image, name } = project;
    return (
        <div className="card card-compact bg-base-100 shadow-lg shadow-cyan-200">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> <a href={livesite}>Live site</a> </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;