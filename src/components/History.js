import React, { useState } from 'react';
import "./history.scss";
import image1 from "../img/history1.jpg";
import image2 from "../img/history2.jpg";
import image3 from "../img/history3.jpg";

const History = () => 
{
    const $h3 =
    [
        "Past", "Present", "Future"
    ];

    const $img =
    [
        image1, image2, image3
    ];

    const [show, setShow] = useState
    (
        {
            activeObject: null,
            object: [{id: 1}, {id:2}, {id: 3}]
        }
    );

    const toggleActive = index =>
    {
        setShow({...show, activeObject: show.object[index]});
    }

    const toggleActiveStyle = index =>
    {
        return show.object[index] === show.activeObject ? "square active" : "square inactive";
    }

    const toggleDislplay = index =>
    {
        return show.object[index] === show.activeObject ? "block" : "none";
    }

    return (
        <section className="history">
            <div className="container">
                <h1>Our History!</h1>
                <div className="grid_history">
                    {
                        show.object.map((x, y) => (
                            <div
                                className="history1"
                                key={y}
                                onClick={() =>
                                {
                                    toggleActive(y)
                                }}
                            >
                                <h3>{$h3[y]}</h3>
                                <div className={toggleActiveStyle(y)}></div>
                                <img src={$img[y]} style={{display: toggleDislplay(y)}}></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default History
