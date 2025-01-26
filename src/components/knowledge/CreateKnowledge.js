"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component in this path
import { Input } from "@/components/ui/input"; // Assuming you have an Input component in this path
import FileUploader from "./FileUploader"; // Import the FileUploader component
import MyKnowledge from "./MyKnowledge"; // Import the MyKnowledge component
import "./CreateKnowledge.css"; // Import the CSS file

const CreateKnowledge = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the information (you can replace this with actual storage logic)
    const knowledgeData = { name, content, file };
    console.log("Knowledge Data:", knowledgeData);
    // Call the onCreate callback with the knowledge data
    onCreate(knowledgeData);
  };

  return (
    <div>
      <div className="create-knowledge-container">
        <h1 className="create-knowledge-title">Create Knowledge</h1>
        <form className="knowledge-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <Input
              id="content"
              name="content"
              type="text"
              placeholder="Enter text or paste website urls"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <FileUploader file={file} setFile={setFile} />
          </div>
          <div className="form-buttons">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const KnowledgePage = () => {
  const [knowledgeData, setKnowledgeData] = useState(null);

  const handleCreateKnowledge = (data) => {
    setKnowledgeData(data);
  };

  return (
    <div>
      {knowledgeData ? (
        <MyKnowledge knowledgeData={knowledgeData} />
      ) : (
        <CreateKnowledge onCreate={handleCreateKnowledge} />
      )}
    </div>
  );
};

export default KnowledgePage;
