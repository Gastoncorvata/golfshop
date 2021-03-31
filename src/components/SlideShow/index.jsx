import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./index.css"


    const SlideShow = ({ item }) => {
        return (
        <div>
            <Slide easing="ease">
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${item?.img})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${item?.img3})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${item?.img4})`}}>
                </div>
            </div>
            </Slide>
        </div>
        )
};

export default SlideShow;