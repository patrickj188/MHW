import React from 'react';



const ArmorStats = (props) => {

    const data = props.armor;
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Selecting elements</legend>
                    <p>
                        <label>Select list</label>
                        <select id="myList">
                           <option value= {data.name} />
                        </select>
                    </p>
                </fieldset>
            </form>

        </div>
    )
}

export default ArmorStats;