"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CreateAgent from "@/components/agent/CreateAgent"; // Import the CreateAgent component
import "./agent.css";

const AiAgent = () => {
  const [agentData, setAgentData] = useState(null);
  const [showCreateAgent, setShowCreateAgent] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("agentData");
    if (storedData) {
      setAgentData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    console.log("agentData:", agentData);
  }, [agentData]);

  const handleCreateAgentClick = () => {
    setShowCreateAgent(true);
  };

  const handleCreateAgent = (data) => {
    setAgentData(data);
    localStorage.setItem("agentData", JSON.stringify(data));
    setShowCreateAgent(false);
  };

  return (
    <div className="centered-container">
      {showCreateAgent ? (
        <CreateAgent onCreate={handleCreateAgent} />
      ) : (
        <div className="centered-content">
          <p className="agent-paragraph">
            Agents help answer visitors’ questions to create a more engaging
            experience
          </p>
          <Button onClick={handleCreateAgentClick}>Create Agent</Button>
        </div>
      )}
    </div>
  );
};

export default AiAgent;
