"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FileUploader = ({ file, setFile }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteFile = () => {
    setFile(null);
    fileInputRef.current.value = null;
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div
          className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer"
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <FileIcon className="w-12 h-12" />
          <span className="text-sm font-medium text-gray-500">
            Drag and drop a file or click to browse
          </span>
          <span className="text-xs text-gray-500">
            PDF, image, video, or audio
          </span>
        </div>
        <div className="space-y-2 text-sm text-left">
          <Label htmlFor="file" className="text-sm font-medium text-left">
            File
          </Label>
          <Input
            id="file"
            type="file"
            placeholder="File"
            accept="image/*,video/*,audio/*,.pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          {file && (
            <div className="flex items-center space-x-2">
              <p>Selected file: {file.name}</p>
              <button
                type="button"
                onClick={handleDeleteFile}
                className="text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

export default FileUploader;
