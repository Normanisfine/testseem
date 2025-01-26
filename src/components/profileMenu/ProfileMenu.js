'use client';
import React from 'react';
import './ProfileMenu.css';
import { useRouter } from 'next/navigation';

const ProfileMenu = ({ activePath }) => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    const getMenuItemClass = (path) => {
        return activePath === path ? 'profileMenu-menuItem active' : 'profileMenu-menuItem';
    };

    return (
        <div className="profileMenu-menu">
            <div className={getMenuItemClass('/profile/account')} onClick={() => handleNavigation('/profile/account')}>
                Account
            </div>
            <div className={getMenuItemClass('/profile/usage')} onClick={() => handleNavigation('/profile/usage')}>
                Plan & Quota
            </div>
            <div className={getMenuItemClass('/profile/notification')} onClick={() => handleNavigation('/profile/notification')}>
                Notification
            </div>
            <div className={getMenuItemClass('/profile/support')} onClick={() => handleNavigation('/profile/support')}>
                Support
            </div>
            <div className={getMenuItemClass('/profile/billing')} onClick={() => handleNavigation('/profile/billing')}>
                Billing
            </div>
        </div>
    );
};

export default ProfileMenu;