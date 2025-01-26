"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component in this path
import CreateKnowledge from "@/components/knowledge/CreateKnowledge"; // Import the CreateKnowledge component
import MyKnowledge from "@/components/knowledge/MyKnowledge"; // Import the MyKnowledge component
import "./knowledge.css"; // Import the CSS file

const Knowledge = () => {
  const [knowledgeData, setKnowledgeData] = useState(null);
  const [showCreateKnowledge, setShowCreateKnowledge] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("knowledgeData");
    if (storedData) {
      setKnowledgeData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    console.log("knowledgeData:", knowledgeData);
  }, [knowledgeData]);

  const handleCreateKnowledgeClick = () => {
    setShowCreateKnowledge(true);
  };

  const handleCreateKnowledge = (data) => {
    setKnowledgeData(data);
    localStorage.setItem("knowledgeData", JSON.stringify(data));
    setShowCreateKnowledge(false);
  };

  return (
    <div className="centered-container">
      {knowledgeData ? (
        <MyKnowledge knowledgeData={knowledgeData} />
      ) : showCreateKnowledge ? (
        <CreateKnowledge onCreate={handleCreateKnowledge} />
      ) : (
        <div className="centered-content">
          <p className="knowledge-paragraph">
            Add knowledge to give your AI agents additional contexts and provide
            better content for visitors.
          </p>
          <Button onClick={handleCreateKnowledgeClick}>Create Knowledge</Button>
        </div>
      )}
    </div>
  );
};

export default Knowledge;
