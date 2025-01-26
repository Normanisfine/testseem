'use client'

import React, {useState} from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  
import "./projects.css"
import Modal from "@/components/modal/Modal";
import ProjectCreate from "@/components/project/projectCreate/ProjectCreate";





const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    const projectList = [];
    // const projectList = [
    //     { project_id: '1', name: 'Project 1' },
    //     { project_id: '2', name: 'Project 2' },
    //   ];

    const handleNewProjectClick = () => {
        setShowModal(true);
      };
    
    const handleCloseModal = () => {
    setShowModal(false);
    };

    if (projectList.length === 0) {
        return (


            <div className="project-main">
                <div className="project-top">
                    <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink >Projects</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/projects">Projects Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>

                    <button onClick={handleNewProjectClick}>New Project</button>

                </div>
                


                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Woops</AlertTitle>
                    <AlertDescription>
                    You do not have any project now. Add a new one and get started!
                    </AlertDescription>
                </Alert>

                <ProjectCreate show={showModal} onClose={handleCloseModal} />

            </div>
        )
    }
    return (
        <div>
            <h1>Projects</h1>
            <p>hu</p>
        </div>
    );
}

export default Projects;