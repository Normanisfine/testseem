"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FiFilter, FiSearch } from "react-icons/fi"; // Importing the ListFilter and Search icons from react-icons
import PreviewDialog from "@/components/task-management/PreviewDialog";
import "./taskManagement.css"; // Assuming you have a CSS file for additional styling

const TaskManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="task-management-container">
      <div className="task-management-nav">
        <div className="task-management-tabs">
          <Button variant="outline">All uploads</Button>
          <Button variant="outline">Ongoing</Button>
          <Button variant="outline">Completed</Button>
          <Button variant="outline">Failed</Button>
        </div>
        <div className="task-management-actions">
          <Button variant="outline" className="filter-button">
            <FiFilter className="filter-icon" /> Filter
          </Button>
          <div className="search-input-container">
            <FiSearch className="search-icon" />
            <Input placeholder="Search task" className="search-input" />
          </div>
        </div>
      </div>
      <div className="task-management-table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>{" "}
              {/* Empty header for the checkbox column */}
              <TableHead>Name</TableHead>
              <TableHead>Create date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>More</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add your table rows here */}
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Example Name</TableCell>
              <TableCell>2023-10-01</TableCell>
              <TableCell>
                <div className="progress-container">
                  <div className="progress-bar-container">
                    <Progress value={70} className="progress-bar" />
                    <span>70%</span>
                  </div>
                  <div className="estimated-time">Estimated 5 min left</div>
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  className="preview-button"
                  onClick={handleDialogOpen}
                >
                  Preview
                </Button>
                <PreviewDialog
                  isOpen={isDialogOpen}
                  onClose={handleDialogClose}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TaskManagement;
