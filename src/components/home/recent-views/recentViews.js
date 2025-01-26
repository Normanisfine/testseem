import React from 'react';
import './recentViews.css';
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import Image from "next/image"; //showcase

const works = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
      },
      {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
      },
      {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
      },
  ];
//showcase

const RecentViews = () => {
    return (
        <div className="recent-container">
            <Card className="w-[650px]">
                <CardHeader>
                    <CardTitle>Recent View</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion collapsible>
                        <AccordionItem value="recent-artifacts">
                            <AccordionTrigger>Artifacts</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="scroll-area">
                                    <div className="flex w-max space-x-4 p-4">
        
                                        {works.map((artwork) => (
                                        <figure key={artwork.artist} className="shrink-0">
                                            <div className="overflow-hidden rounded-md">
                                            <img
                                                src={artwork.art}
                                                alt={`Photo by ${artwork.artist}`}
                                                className="h-[400px] w-[300px] object-cover"
                                            />
                                            </div>
                                            <figcaption className="pt-2 text-xs text-muted-foreground">
                                            New Project:  
                                            <span className="font-semibold text-foreground">
                                                {artwork.artist}
                                            </span>
                                            </figcaption>
                                        </figure>
                                        ))}
                                        
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="recent-interior">
                            <AccordionTrigger>Interior</AccordionTrigger>
                            <AccordionContent>
                                No work... yet.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="recent-gallery">
                            <AccordionTrigger>Gallery</AccordionTrigger>
                            <AccordionContent>
                            <ScrollArea className="scroll-area">
                                    <div className="flex w-max space-x-4 p-4">
        
                                        {works.map((artwork) => (
                                        <figure key={artwork.artist} className="shrink-0">
                                            <div className="overflow-hidden rounded-md">
                                            <img
                                                src={artwork.art}
                                                alt={`Photo by ${artwork.artist}`}
                                                className="h-[400px] w-[300px] object-cover"
                                            />
                                            </div>
                                            <figcaption className="pt-2 text-xs text-muted-foreground">
                                            New Project:  
                                            <span className="font-semibold text-foreground">
                                                {artwork.artist}
                                            </span>
                                            </figcaption>
                                        </figure>
                                        ))}
                                        
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
};

export default RecentViews;