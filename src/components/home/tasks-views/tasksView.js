import React from 'react';
import './tasksView.css';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress"
import { ScrollArea, Scrollbar } from '@radix-ui/react-scroll-area';

const TasksView = () => {
    return (
        <div className="task-container">
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle>Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion collapsible>
                        <AccordionItem value="tasks-ongoing">
                            <AccordionTrigger>Ongoing</AccordionTrigger>
                            <AccordionContent>
                            <ScrollArea className="h-60 w-70 rounded-md border">
                            <div>
                                <Card className="task-card">
                                    <CardTitle>New Model 1</CardTitle>
                                    <Progress className="task-progress" value={33} />
                                    <span className="progress-value">33%</span>
                                </Card>
                            </div>
                            <div>

                                <Card className="task-card">
                                    <CardTitle>New Model 2</CardTitle>
                                    <Progress className="task-progress" value={67} />
                                </Card>
                            </div>
                            <div>

                                <Card className="task-card">
                                    <CardTitle>New Model 3</CardTitle>
                                    <Progress className="task-progress" value={12} />
                                </Card>
                            </div>
                            <div>

                                <Card className="task-card">
                                    <CardTitle>New Model 4</CardTitle>
                                    <Progress className="task-progress" value={98} />
                                </Card>
                            </div>
                            <div>

                                <Card className="task-card">
                                    <CardTitle>New Model 5</CardTitle>
                                    <Progress className="task-progress" value={37} />
                                </Card>
                            </div>
                            <Scrollbar/>
                            </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="tasks-completed">
                            <AccordionTrigger>Completed</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
};

export default TasksView;