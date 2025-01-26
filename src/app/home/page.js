import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import './home.css';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import RecentViews from '@/components/home/recent-views/recentViews';
import TasksView from '@/components/home/tasks-views/tasksView';
import Image from 'next/image';
import AspectRatio from '/public/assets/AspectRatio.png'; 
import { Dot } from 'lucide-react';

const RecentTasks = () => {
    return (
        <div className='home-recent-frame'>
            <div className='home-recent-inner-frame'>
                <div>
                    <h2>Recent Tasks</h2>
                </div>

                <div className='home-recent-projects-frame'>
                    <div className='home-recent-project-frame'>
                        <div className='home-rp-pic-frame'>
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                        </div>

                        <div className='home-rp-info-frame'>
                            <h3>Projects 1</h3>

                            <div className='home-rp-info-meta'>
                                <p>20 artifacts</p>
                                <Dot />
                                <p>Updated 1 hour ago</p>

                            </div>
                            
                        </div>
                    </div>

                    <div className='home-recent-project-frame'>
                        <div className='home-rp-pic-frame'>
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                        </div>

                        <div className='home-rp-info-frame'>
                            <h3>Projects 2</h3>

                            <div className='home-rp-info-meta'>
                                <p>20 artifacts</p>
                                <Dot />
                                <p>Updated 1 hour ago</p>

                            </div>
                            
                        </div>
                    </div>

                    <div className='home-recent-project-frame'>
                        <div className='home-rp-pic-frame'>
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                            <Image src={AspectRatio} alt='Aspect Ratio' />
                        </div>

                        <div className='home-rp-info-frame'>
                            <h3>Projects 3</h3>

                            <div className='home-rp-info-meta'>
                                <p>20 artifacts</p>
                                <Dot />
                                <p>Updated 1 hour ago</p>

                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>

            <button>View All</button>
        </div>
    )
}

const Analytics = () => {
    return (
        <div className='home-analytics-frame'>
            <h2>Analytics</h2>

            <div className='home-analytics-obj-frame'>
                <h3>Object Reconstructions</h3>

                <div className='home-analytics-obj-info'> 
                    <div className='home-analytics-obj-info-total'> 
                        <h4>Total Artifacts</h4>
                        <p>267</p>
                    </div>

                    <div className='home-analytics-obj-info-total'> 
                        <h4>Ongoing</h4>
                        <p>2</p>
                    </div>
                </div>
            </div>

            <div className='home-analytics-obj-frame'>
                <h3>AI Agent</h3>

                <div className='home-analytics-obj-info'> 
                    <div className='home-analytics-obj-info-total'> 
                        <h4>Total Users</h4>
                        <p>120</p>
                    </div>

                    <div className='home-analytics-obj-info-total'> 
                        <h4>Average Messages</h4>
                        <p>8</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

const Activities = () => {
    return (
        <div className='home-activities-frame'>
            <h2>Activities</h2>

            <div className='home-activities-content'>
                <div className='home-activities-noti active'>
                    <div className='home-activities-noti-circle active'> </div>

                    <div className='home-activities-noti-text active'>
                        <h3>Reconstruction of Artifact 3 has completed.</h3>
                        <p>1 hour ago</p>
                    </div>
                    
                </div>

                <div className='home-activities-noti active'>
                    <div className='home-activities-noti-circle active'> </div>

                    <div className='home-activities-noti-text active'>
                        <h3>Reconstruction of Artifact 2 has completed.</h3>
                        <p>1 hour ago</p>
                    </div>
                    
                </div>

                <div className='home-activities-noti'>
                    <div className='home-activities-noti-circle'> </div>

                    <div className='home-activities-noti-text'>
                        <h3>Reconstruction of Artifact 1 has completed.</h3>
                        <p>1 hour ago</p>
                    </div>
                    
                </div>

                <div className='home-activities-noti'>
                    <div className='home-activities-noti-circle'> </div>

                    <div className='home-activities-noti-text'>
                        <h3>New Project “East Asian” has been created.</h3>
                        <p>2 hour ago</p>
                    </div>
                    
                </div>

                <div className='home-activities-noti'>
                    <div className='home-activities-noti-circle'> </div>

                    <div className='home-activities-noti-text'>
                        <h3>New AI Agent “Tour Guide 2” has been added.</h3>
                        <p>2 hour ago</p>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}


const Dashboard = async () => {
    const user = await currentUser();
    const displayName = user?.firstName?.length > 0 ? user.firstName : user.username;

    

    return (
        <div className='home-main'>
            <h1>Hello, {displayName}</h1>

            <RecentTasks />

            <div className='home-down-frame'>
                <Analytics />

                <Activities />
            </div>

            
        </div>

        
    );
};

export default Dashboard;