import React from 'react';

const LPSearchResults = props => {
    return (
        <ul>
            {props.searchResults.map(host => {
                return (
                    <div className="host-result">
                    <li key={Math.floor(Math.random() * 10000) + 1}>
                        Maximum # of Guests allowed: {host.maxGroup}
                    </li>
                    <li key={Math.floor(Math.random() * 10000) + 1}>
                        Food being served: {host.foodType}
                    </li>
                    <li key={Math.floor(Math.random() * 10000) + 1}>
                        About this Host: {host.about}
                    </li>
                    <li key={Math.floor(Math.random() * 10000) + 1}>
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