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
                        Serving in: {host.city}, {host.state}
                    </li>
                    <hr />
                    </div>
                    )
            })}
        </ul>
    )
}

export default LPSearchResults;