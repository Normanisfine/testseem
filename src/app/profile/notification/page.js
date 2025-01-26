import ProfileMenu from "@/components/profileMenu/ProfileMenu";
import React from "react";
import "./notification.css";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"

const Notification = () => {
    return (
        <div className="notification-main">
            <ProfileMenu activePath='/profile/notification' />

            <Card className='notification-card'>
                <div className="notification-title">
                    <h2>Notification Setting</h2>
                </div>

                <div className="notification-email-frame">
                    <p className="notification-part">Email</p>
                    <div className="notification-item-frame">
                        <p>Task Status</p>
                        <Switch/>
                    </div>

                    <div className="notification-item-frame">
                        <p>Alert</p>
                        <Switch/>
                    </div>

                    <div className="notification-item-frame">
                        <p>Product Updates</p>
                        <Switch/>
                    </div>

                </div>

                <div className="notification-dividor"></div>
                
                <div className="notification-email-frame">
                    <p className="notification-part">In-app</p>
                    <div className="notification-item-frame">
                        <p>Task Status</p>
                        <Switch/>
                    </div>

                    <div className="notification-item-frame">
                        <p>Alert</p>
                        <Switch/>
                    </div>

                    <div className="notification-item-frame">
                        <p>Product Updates</p>
                        <Switch/>
                    </div>

                </div>
            </Card>
        </div>

        
    );
}

export default Notification;