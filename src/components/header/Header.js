"use client";
import React from 'react';
import { UserButton, SignedOut, SignedIn, SignInButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import './Header.css';
import Profile from '@/app/profile/page';
import Usage from '@/app/profile/usage/page';

const DotIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    )
  }

const Header = () => {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <div className="header">
            <div className='header-container'>
                <div className="header-right">
                    {/* <button className="icon-button">?</button>
                    <button className="icon-button">⚙️</button> */}
                    <SignedOut>
                    <SignInButton />
                        </SignedOut>
                    <SignedIn>
                        <UserButton userProfileMode='navigation' userProfileUrl='/profile/account' showName />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default Header;