import React from "react";
import './support.css';
import ProfileMenu from "@/components/profileMenu/ProfileMenu";
import { Card } from "@/components/ui/card";


const Support = () => {
    return (
        <div className="support-main">
            <ProfileMenu activePath='/profile/support'/>

            <Card className='support-card'>
                <div className="support-title">
                    <h2>Support</h2>
                </div>

                <p>How can we help?</p>

            <div className="support-method-frame">

                <div className="support-method-card">
                    <div className="smc-header">
                        <h3>Read Resources</h3>
                        <p>Step-by-step guides to resolve your questions.</p>
                    </div>
                    <div className="smc-button">
                        <button>Tutorials
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 5.33333C4.79848 5.33333 4.5 5.03486 4.5 4.66667C4.5 4.29848 4.79848 4 5.16667 4H11.8333C12.2015 4 12.5 4.29848 12.5 4.66667V11.3333C12.5 11.7015 12.2015 12 11.8333 12C11.4651 12 11.1667 11.7015 11.1667 11.3333V6.27614L5.63807 11.8047C5.37772 12.0651 4.95561 12.0651 4.69526 11.8047C4.43491 11.5444 4.43491 11.1223 4.69526 10.8619L10.2239 5.33333H5.16667Z" fill="#18181B"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="support-method-card">
                    <div className="smc-header">
                        <h3>Contact Us</h3>
                        <p>Reach out for personalized support.</p>
                    </div>
                    <div className="smc-button">
                        <button>Email
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 5.33333C4.79848 5.33333 4.5 5.03486 4.5 4.66667C4.5 4.29848 4.79848 4 5.16667 4H11.8333C12.2015 4 12.5 4.29848 12.5 4.66667V11.3333C12.5 11.7015 12.2015 12 11.8333 12C11.4651 12 11.1667 11.7015 11.1667 11.3333V6.27614L5.63807 11.8047C5.37772 12.0651 4.95561 12.0651 4.69526 11.8047C4.43491 11.5444 4.43491 11.1223 4.69526 10.8619L10.2239 5.33333H5.16667Z" fill="#18181B"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="support-method-frame">

                <div className="support-method-card">
                    <div className="smc-header">
                        <h3>Report A Problem</h3>
                        <p>Share feedback or report an issue.</p>
                    </div>
                    <div className="smc-button">
                        <button>Report
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 5.33333C4.79848 5.33333 4.5 5.03486 4.5 4.66667C4.5 4.29848 4.79848 4 5.16667 4H11.8333C12.2015 4 12.5 4.29848 12.5 4.66667V11.3333C12.5 11.7015 12.2015 12 11.8333 12C11.4651 12 11.1667 11.7015 11.1667 11.3333V6.27614L5.63807 11.8047C5.37772 12.0651 4.95561 12.0651 4.69526 11.8047C4.43491 11.5444 4.43491 11.1223 4.69526 10.8619L10.2239 5.33333H5.16667Z" fill="#18181B"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="support-method-card">
                    <div className="smc-header">
                        <h3>Learn More</h3>
                        <p>Explore in-depth insights about our product.</p>
                    </div>
                    <div className="smc-button">
                        <button>Website
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 5.33333C4.79848 5.33333 4.5 5.03486 4.5 4.66667C4.5 4.29848 4.79848 4 5.16667 4H11.8333C12.2015 4 12.5 4.29848 12.5 4.66667V11.3333C12.5 11.7015 12.2015 12 11.8333 12C11.4651 12 11.1667 11.7015 11.1667 11.3333V6.27614L5.63807 11.8047C5.37772 12.0651 4.95561 12.0651 4.69526 11.8047C4.43491 11.5444 4.43491 11.1223 4.69526 10.8619L10.2239 5.33333H5.16667Z" fill="#18181B"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            </Card>
        </div>
    )
}

export default Support