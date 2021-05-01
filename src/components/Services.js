import React, { useState } from 'react';
import "./services.scss";
import image1 from "../img/services1.jpg";
import image2 from "../img/services2.jpg";
import image3 from "../img/services3.jpg";
import image4 from "../img/services4.jpg";

const Services = () => 
{
    const [change, setChange] = useState
    (
        {
            activeObj: null,
            obj: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
        }
    );

    const $html =
    [
        "Front-End Developer", "Back-End Developer", "Full Stack Developer", "Software Developer"
    ];

    const $images =
    [
        image1, image2, image3, image4
    ];

    const toggleActive = index =>
    {
        setChange({...change, activeObj: change.obj[index]});
    }

    const toggleActiveStyles = index =>
    {
        return change.obj[index] === change.activeObj ? "services1 active" : "services1 inactive";
    }

    const displayImg = index =>
    {
        return change.obj[index] === change.activeObj ? "block" : "none";
    }

    return (
        <section className="services">
            <div className="container">
                <h1>Our Services!</h1>
                <div className="grid_services">
                   {
                       change.obj.map((a, b) => (
                           <div
                            className="grids"
                            key={b}
                            onClick={() =>
                            {
                                toggleActive(b)
                            }}
                           >
                               <h3>{$html[b]}</h3>
                               <div className={toggleActiveStyles(b)}></div>
                           </div>
                       ))
                   }
                </div>
                {
                    change.obj.map((x, y) => (
                    <div 
                        className="flex_services" 
                        style={{display: displayImg(y)}}>

                        <div className="flexing">
                            <img src={$images[y]}></img>
                            <div className="flex_image">
                                <h2>{$html[y]}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab dicta quaerat blanditiis veniam. 
                                Temporibus doloremque itaque vel placeat iure excepturi, beatae architecto voluptatibus ab dolorum 
                                numquam adipisci distinctio quae, hic quia. Omnis modi aspernatur corporis cupiditate. Odio, dolore 
                                aspernatur praesentium numquam adipisci, vero libero, dolor natus doloremque commodi architecto.</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Services
