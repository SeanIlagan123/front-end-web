import React from 'react';

function Tweet(prop){
    return(
        <div>
            <h3>{prop.name}</h3>
            <p>{prop.tweet}</p>
            <h3>{prop.likes}</h3>
        </div>
    );
}

export default Tweet;