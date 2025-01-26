"use client";

import React, { useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle  } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import ProfileMenu from '@/components/profileMenu/ProfileMenu';
import "./usage.css"


const Usage = () => {
    const { isLoaded } = useAuth();
    const { user } = useUser();
    const [profile, setProfile] = useState(null);
    const [quota, setQuota] = useState(null);
    user? console.log(user): console.log("No user");

    useEffect(() => {
        if (isLoaded && user) {
            setProfile(user);
        }
    }, [isLoaded, user]);

    useEffect(() => {
        const fetchQuota = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4523/m1/4570922-4219543-default/users/quota', {
                    // headers: { 
                    //     Authorization: `Bearer ${user.id}`
                    // }
                });
                setQuota(response.data);
            } catch (error) {
                console.error('Error fetching quota:', error);
            }
        };

        fetchQuota();
    }, []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    const storageQuotaRatio = quota ? (quota.storage_quota.used_gb / quota.storage_quota.total_gb) * 100 : 0;
    const storageQuotaUsed = quota ? quota.storage_quota.used_gb : 0;
    const storageQuotaTotal = quota ? quota.storage_quota.total_gb : 0;

    const processingQuotaRatio = quota ? (quota.processing_quota.used / quota.processing_quota.monthly_limit) * 100 : 0; 
    const processingQuotaUsed = quota ? quota.processing_quota.used : 0;
    const processingQuotaTotal = quota ? quota.processing_quota.monthly_limit : 0; 

    return (
        <div className='usage-main'>
        <ProfileMenu activePath='/profile/usage'/>

        <div>
            <Card className='usage-card'>
                <div className="usage-title">
                    <h2>Plan</h2>
                </div>
            
                <div className='usage-plan'>
                    
                    <p>You are on a <strong>Standard Plan</strong></p>
                    <div className='usage-plan-button'>
                        <button>Manage Plan</button>
                        <p>Plan renews on Feb 8 2025</p>
                    </div>
                    
                </div>

                <div className='usage-dividor'></div>

                <div className="usage-title">
                    <h2>Quota Usage</h2>
                </div>

                <div className='usage-quota-frame'>
                    <Card className='usage-quota-card'> 
                        <h2>Storage Usage</h2>
                        <div className='usage-progress-frame'>
                            <Progress value={storageQuotaRatio} />
                            <p>{storageQuotaUsed} / {storageQuotaTotal}</p>
                        </div>
                        
                    </Card>   

                    <Card className='usage-quota-card'> 
                        <h2>Processing Usage</h2>
                        <div className='usage-progress-frame'>
                            <Progress value={processingQuotaRatio} />
                            <p>{processingQuotaUsed} / {processingQuotaTotal}</p>
                        </div>
                    </Card>   
                </div>
                

            </Card>
        </div>

        
        

        {/* <div className="container mx-auto p-4">
        <h2>Storage Usage</h2>
        <Card>
            <p>Total: {quota? quota.storage_quota.total_gb : "Nan"} GB</p>
            <p>Used: {quota? quota.storage_quota.used_gb :"Nan" } GB</p>
            <Progress value={storageQuotaRatio} />
        </Card>

        <h2>Processing Usage</h2>
        <Card>
            <p>Monthly Limit: {quota? quota.processing_quota.monthly_limit : "Nan"} units</p>
            <p>Used: {quota? quota.processing_quota.used :"Nan" } units</p>
            <Progress value={processingQuotaRatio} />
        </Card>

        {quota ? (
            <div>
                <p>Reset Date: {quota.processing_quota.reset_date}</p>
            </div>
        ) : (
            <div>Loading quota...</div>
        )}
    </div> */}
    </div>
    );
};

export default Usage;