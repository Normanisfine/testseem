'use client'

import React, {useState} from "react";
import { useParams } from 'next/navigation'

import './project.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ArtifactCreate from "@/components/project/artifactCreate/ArtifactCreate";
import { ScrollArea } from "@/components/ui/scroll-area"

export default  function page() {
  const params = useParams()

  const project_id = params.project_id;


  const [showModal, setShowModal] = useState(false);

  const handleNewProjectClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='project-main'>
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href={`/projects/${project_id}`}>Projects {project_id}</BreadcrumbLink>
            </BreadcrumbItem>

        </BreadcrumbList>
        </Breadcrumb>

        <button onClick={handleNewProjectClick}>Create New</button>

      </div>

      <ArtifactCreate show={showModal} onClose={handleCloseModal} />


    </div>
    
  )
}
