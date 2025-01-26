"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component in this path
import { Checkbox } from "@/components/ui/checkbox"; // Assuming you have a Checkbox component in this path
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"; // Assuming you have these components in this path
import CreateKnowledge from "@/components/knowledge/CreateKnowledge"; // Import the CreateKnowledge component
import "./MyKnowledge.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MyKnowledge = ({ knowledgeData }) => {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const handleCreateNewClick = () => {
    setIsCreatingNew(true);
  };

  const renderFile = (file) => {
    const fileUrl = URL.createObjectURL(file);
    const fileType = file.type.split("/")[0];

    switch (fileType) {
      case "image":
        return <img src={fileUrl} alt={file.name} className="uploaded-file" />;
      case "video":
        return <video src={fileUrl} controls className="uploaded-file" />;
      case "audio":
        return <audio src={fileUrl} controls className="uploaded-file" />;
      default:
        return (
          <a href={fileUrl} download={file.name} className="uploaded-file">
            Download {file.name}
          </a>
        );
    }
  };

  if (isCreatingNew) {
    return <CreateKnowledge />;
  }

  return (
    <div className="my-knowledge-container">
      <div className="my-knowledge-header">
        <h1 className="my-knowledge-title">My Knowledge</h1>
        <div className="my-knowledge-buttons">
          <Button variant="destructive">Delete</Button>
          <Button variant="outline" onClick={handleCreateNewClick}>
            Create New
          </Button>
        </div>
      </div>
      <div className="my-knowledge-sheet">
        <Checkbox id="knowledge-checkbox" />
        <Sheet>
          <SheetTrigger asChild>
            <Card className="sheet-card">
              <CardHeader>
                <CardTitle>{knowledgeData.name}</CardTitle>
                <CardDescription className="card-description">
                  Card Description
                </CardDescription>
              </CardHeader>
            </Card>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{knowledgeData.name}</SheetTitle>
              <SheetDescription>{knowledgeData.content}</SheetDescription>
            </SheetHeader>
            <div className="sheet-content">
              {knowledgeData.file && renderFile(knowledgeData.file)}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MyKnowledge;
