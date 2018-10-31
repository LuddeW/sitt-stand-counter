import React from 'react';

const leftPad = (val) => {
    if(val < 10) return `0${val}`;
    
    return `${val}`;
}

const Display = (props) => (
    <div className="row">
        <h2 className="mx-auto">{`${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
    </div>
    
);

export default Display;