import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "./PreviewDialog.css"; // Assuming you have a CSS file for additional styling

const PreviewDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dialog-content">
        <DialogTitle>Preview: New artifact</DialogTitle>
        <DialogDescription>This is the preview content.</DialogDescription>
        <div className="dialog-actions">
          <DialogClose asChild>
            <Button className="done-button">Done</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
