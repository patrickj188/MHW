import React from 'react';
import ArmorInfo from './ArmorInfo'
import Weapons from './Weapons';


class App extends React.Component{
    render(){
        return(
            <div>
            <ArmorInfo />
            <Weapons />
            </div>
        )
    }
}


export default App;