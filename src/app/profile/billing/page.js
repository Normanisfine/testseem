import React from "react";
import './billing.css';
import ProfileMenu from "@/components/profileMenu/ProfileMenu";
import { Card } from "@/components/ui/card";


const Billing = () => {
    return (
        <div className="billing-main">
            <ProfileMenu activePath='/profile/billing'/>

            <Card className='billing-card'>
                <div className="billing-title">
                    <h2>Billing</h2>
                </div>

                <p>Billing information not yet available.</p>
            </Card>
        </div>

        
    );
}

export default Billing;