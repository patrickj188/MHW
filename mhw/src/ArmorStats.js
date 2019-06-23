import React from 'react';



const ArmorStats = (props) => {

    const data = props.armor;
    return (
        <div>
            <ul>
                <li>
                {data.name} 
                </li>
            </ul>
        </div>
    )
}

export default ArmorStats;