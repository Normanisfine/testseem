'use client';
import React, { useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import axios from 'axios';
import ProfileMenu from '@/components/profileMenu/ProfileMenu';


const Profile = () => {
    const { isLoaded } = useAuth();
    const { user } = useUser();
    const [profile, setProfile] = useState(null);
    const [quota, setQuota] = useState(null);

    useEffect(() => {
        if (isLoaded && user) {
            setProfile(user);
        }
    }, [isLoaded, user]);

    useEffect(() => {
        const fetchQuota = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4523/m1/4570922-4219543-default/users/quota');
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

    return (
        <div>
            <ProfileMenu />
            <h1>Profile</h1>
            {profile && (
                <div>
                    <p>Name: {profile.firstName} {profile.lastName}</p>
                    <p>Email: {profile.emailAddresses[0].emailAddress}</p>
                </div>
            )}
            <h2>Quota</h2>
            {quota ? (
                <div>
                    <h3>Storage Quota</h3>
                    <p>Total: {quota.storage_quota.total_gb} GB</p>
                    <p>Used: {quota.storage_quota.used_gb} GB</p>
                    <h3>Processing Quota</h3>
                    <p>Monthly Limit: {quota.processing_quota.monthly_limit}</p>
                    <p>Used: {quota.processing_quota.used}</p>
                    <p>Reset Date: {quota.processing_quota.reset_date}</p>
                </div>
            ) : (
                <div>Loading quota...</div>
            )}
        </div>
    );
};

export default Profile;