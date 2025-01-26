"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import "./MyAgent.css";

const MyAgent = ({ agentData }) => {
  return (
    <div className="my-agent-container">
      <div className="my-agent-header">
        <h1 className="my-agent-title">My Agents</h1>
        <div className="my-agent-buttons">
          <Button variant="outline">Select</Button>
          <Button>Create New</Button>
        </div>
      </div>
      <Card className="agent-card">
        <CardHeader>
          <CardTitle>{agentData.agentType}</CardTitle>
          <CardDescription>{agentData.knowledge}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MyAgent;
