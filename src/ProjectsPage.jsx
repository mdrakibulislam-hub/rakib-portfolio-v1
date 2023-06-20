import React, { useEffect } from 'react';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';

const ProjectsPage = () => {

    useEffect(() => {
        document.title = "Projects | Md Rakibul Islam"
    }, [])

    return (
        <div>
            <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default ProjectsPage;