import React from 'react';
import ArmorInfo from './ArmorInfo'
import WeaponInfo from './WeaponInfo';


class App extends React.Component{
    render(){
        return(
            <div>
            <ArmorInfo />
            <WeaponInfo />
            </div>
        )
    }
}


export default App;