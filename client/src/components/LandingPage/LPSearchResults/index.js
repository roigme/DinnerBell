import React from 'react';

const LPSearchResults = props => {
    return (
        <ul>
            {props.searchResults.map((host, index) => {
                return (
                    <div key={index} className="host-result">
                    <li>
                        Maximum # of Guests allowed: {host.maxGroup}
                    </li>
                    <li>
                        Food being served: {host.foodType}
                    </li>
                    <li>
                        About this Host: {host.about}
                    </li>
                    <li>
                        Serving in: <a 
                        href={`https://www.google.com/maps/place/${host.city}+${host.state}`}
                        target="_blank" rel="noopener noreferrer">
                        {host.city}, {host.state}
                        </a>
                    </li>
                    <hr />
                    </div>
                    )
            })}
        </ul>
    )
}

export default LPSearchResults;