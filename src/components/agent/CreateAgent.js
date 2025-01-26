"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // Import Select components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MyAgent from "@/components/agent/MyAgent"; // Import MyAgent component
import "./CreateAgent.css"; // Assuming you have a CSS file for styling

const CreateAgent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [agentType, setAgentType] = useState("");
  const [knowledge, setKnowledge] = useState(""); // Add state for knowledge
  const [instructions, setInstructions] = useState(""); // Add state for instructions
  const [agentData, setAgentData] = useState(null); // Add state for agent data

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, description, agentType, knowledge, instructions };
    setAgentData(data); // Set the agent data to trigger rendering of MyAgent
  };

  const handleAgentTypeClick = (type) => {
    setAgentType(type);
  };

  if (agentData) {
    return <MyAgent agentData={agentData} />;
  }

  return (
    <div className="create-agent-container">
      <h2 className="create-agent-title">Create Agent</h2>
      <form className="agent-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Agent Name"
          />
        </div>
        <div className="form-group">
          <Label>Agent Type</Label>
          <div className="agent-type-cards">
            <Card
              className={`agent-type-card ${
                agentType === "Tour guide" ? "selected" : ""
              }`}
              onClick={() => handleAgentTypeClick("Tour guide")}
            >
              <CardHeader>
                <CardTitle>Tour guide</CardTitle>
              </CardHeader>
              <CardDescription className="card-description">
                Guide visitors through tours.
              </CardDescription>
            </Card>
            <Card
              className={`agent-type-card ${
                agentType === "Help desk" ? "selected" : ""
              }`}
              onClick={() => handleAgentTypeClick("Help desk")}
            >
              <CardHeader>
                <CardTitle>Help desk</CardTitle>
              </CardHeader>
              <CardDescription className="card-description">
                Assist visitors with their questions.
              </CardDescription>
            </Card>
            <Card
              className={`agent-type-card ${
                agentType === "Role play" ? "selected" : ""
              }`}
              onClick={() => handleAgentTypeClick("Role play")}
            >
              <CardHeader>
                <CardTitle>Role play</CardTitle>
              </CardHeader>
              <CardDescription className="card-description">
                Engage visitors in role-playing scenarios.
              </CardDescription>
            </Card>
          </div>
        </div>
        <div className="form-group">
          <Label htmlFor="knowledge">Knowledge</Label>
          <Select onValueChange={(value) => setKnowledge(value)}>
            <SelectTrigger id="knowledge">
              <SelectValue placeholder="Select Knowledge" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="knowledge1">Knowledge 1</SelectItem>
              <SelectItem value="knowledge2">Knowledge 2</SelectItem>
              <SelectItem value="knowledge3">Knowledge 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group instructions-group">
          <Label htmlFor="instructions">Instructions</Label>
          <Input
            id="instructions"
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            className="instructions-input"
          />
        </div>
        <div className="form-buttons">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAgent;
