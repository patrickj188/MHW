import React from 'react';



const WeaponStats = (props) => {

    const data = props.weapon;
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

export default WeaponStats;