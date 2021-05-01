import React, { useState } from 'react';
import "./contact.scss";

const Contact = () => 
{
    const title =
    [
        "Phone:", "Email:", "Address:"
    ];

    const contactInfo =
    [
        "503-551-5555", "email@mail.com", `123 Way NE Nowhere, Oregon 94342`
    ];

    const [appState, setAppState] = useState
    (
        {
            activeObject: null,
            object: [{id: 1}, {id: 2}, {id: 3}]
        }
    );

    const toggleActive = index =>
    {
        setAppState({...appState, activeObject: appState.object[index]});
    }

    const toggleActiveStyle = index =>
    {
        return appState.activeObject === appState.object[index] ? "square active" : "square inactive";
    }

    const toggleDisplay = index =>
    {
        return appState.activeObject === appState.object[index] ? "block" : "none";
    }

    return (
        <section className="contact">
            <div className="container">
                <h1>Contact Us!</h1>
                <div className="grid_contact">
                    {
                        appState.object.map((x, y) => (
                            <div
                                className="contact1"
                                key={y}
                                onClick={() =>
                                {
                                    toggleActive(y)
                                }}
                            >
                                <h3>{title[y]}</h3>
                                <div className={toggleActiveStyle(y)}></div>
                                <p>{contactInfo[y]}</p>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Contact
