'use client'

import ProfileMenu from "@/components/profileMenu/ProfileMenu";
import React, { useState, useEffect } from "react";
import './account.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { useAuth, useUser, useOrganization } from '@clerk/nextjs';



const Account = () => {


  const { user, isLoaded } = useUser();

  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    organization: '',
    profilePictureUrl: '',
  });

  const [editState, setEditState] = useState({
    username: false,
    email: false,
    phone: false,
    organization: false,
    profilePictureUrl: false,
  });

  useEffect(() => {
    if (isLoaded && user) {
      setData({
        username: user.username || '',
        email: user.emailAddresses[0]?.emailAddress || '',
        phone: user.phoneNumbers[0]?.phoneNumber || '',
        organization: user.organizationMemberships[0]?.organization?.name || '',
        profilePictureUrl: user.imageUrl || '',
      });
    }
  }, [user, isLoaded]);


  const handleSave = async (field) => {
    try {
      const updateData = {};
      if (field === 'email') {
        updateData.emailAddresses = [{ emailAddress: data[field], id: user.emailAddresses[0].id }];
      } else if (field === 'phone') {
        updateData.phoneNumbers = [{ phoneNumber: data[field], id: user.phoneNumbers[0].id }];
      } else {
        updateData[field] = data[field];
      }

      await user.update(updateData);
      setEditState(prev => ({ ...prev, [field]: false }));
    } catch (error) {
      console.error('Failed to update user:', error);
      // Optionally handle errors, e.g., show a message to the user
    }
  };


  const handleEditClick = (field) => {
    setEditState(prev => ({ ...prev, [field]: true }));
  };

  const handleCancel = (field) => {
    setData({
      username: user?.username,
      email: user?.emailAddresses[0]?.emailAddress,
      phone: user?.phoneNumbers[0]?.phoneNumber,
      profilePictureUrl: user?.imageUrl,
    });
    setEditState(prev => ({ ...prev, [field]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const renderField = (field, type = 'text') => {
    return editState[field] ? (
      <div className="account-info-frame">
        <div className="account-info-left-input">
          <label>
          {`${field.charAt(0).toUpperCase() + field.slice(1)}: `}
          </label>
    
          <input
            type={type}
            name={field}
            value={data[field]}
            onChange={handleChange}
          />
        </div>
        <div className="account-edit-button">
          <button className="account-edit-cancel" onClick={() => handleCancel(field)}>Cancel</button>
          <button className="account-edit-save" onClick={() => handleSave(field)}>Save</button>
        </div>
      </div>
    ) : (
      <div className="account-info-frame">
        <div className="account-info-left">
          <label>
          {`${field.charAt(0).toUpperCase() + field.slice(1)}`}
          </label>
          <span>{data[field]}</span>
        </div>

        <button onClick={() => handleEditClick(field)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.481 2.11782C17.1972 1.40173 18.1686 0.999507 19.1815 0.999634C20.1943 0.999761 21.1656 1.40223 21.8817 2.1185C22.5978 2.83476 23 3.80616 22.9999 4.81899C22.9998 5.83183 22.5973 6.80312 21.881 7.51921L8.53416 20.8681L8.53298 20.8692C8.18524 21.2159 7.75774 21.4719 7.28798 21.6147L2.93186 22.9357C2.67253 23.0136 2.39694 23.0199 2.13434 22.9539C1.87173 22.8879 1.63188 22.752 1.44025 22.5607C1.24862 22.3694 1.11236 22.1297 1.04592 21.8672C0.979475 21.6047 0.98533 21.3291 1.06286 21.0697L1.06411 21.0656L2.38511 16.7136L2.38593 16.7109C2.52998 16.241 2.78725 15.8138 3.1351 15.4667C3.13538 15.4664 3.13565 15.4661 3.13593 15.4659L16.481 2.11782ZM17.895 3.53221C17.895 3.53227 17.8951 3.53215 17.895 3.53221L4.54918 16.881L4.54806 16.8822C4.43226 16.9976 4.34654 17.1397 4.29841 17.296C4.2983 17.2964 4.29818 17.2968 4.29806 17.2972L3.25024 20.7492L6.70601 19.7013C6.86228 19.6538 7.00452 19.5687 7.12031 19.4535C7.12007 19.4537 7.12054 19.4533 7.12031 19.4535L20.4668 6.10496C20.808 5.7639 20.9998 5.30114 20.9999 4.81874C20.9999 4.33635 20.8084 3.87368 20.4673 3.53253C20.1262 3.19138 19.6636 2.99969 19.1812 2.99963C18.6989 2.99957 18.2361 3.19125 17.895 3.53221Z" fill="#D4D4D4"/>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="account-main">
      <ProfileMenu activePath='/profile/account'/>

      <div>
        <Card className = 'account-card'>
          <CardHeader className='account-header'>Account Information</CardHeader>
          <CardContent className='account-card-content'>
          {/* <div className="account-img-container">
            {data.profilePictureUrl ? (
                <img className="account-pic" src={data.profilePictureUrl} alt="User Profile" />
            ) : (
                <div className="placeholder-pic">No Image</div>
            )}
          </div> */}
          <Avatar className='account-avatar'>
          <AvatarImage src={data.profilePictureUrl} />
          </Avatar>
          <div className="account-card-info">
            {renderField('username')}
            {renderField('email')}
            {renderField('phone')}
            {renderField('organization')}

          </div>
          </CardContent>
          
        </Card>
      </div>

    </div>
  );
}

export default Account;