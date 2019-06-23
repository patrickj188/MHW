import React from 'react';
// import ArmorService from './services/armor.service.js'
import ArmorStats from './ArmorStats'


class ArmorInfo extends React.Component {

    constructor() {
        super()
        this.state = {
            armor: []
        };
    }

    componentDidMount() {

        fetch("http://localhost:8080/armor")
            .then(response => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    armor: data.map(item => ({
                        name: item.name,
                        rank: item.rank,
                        // pieces: item.pieces['defense[3]'],

                    }))
                })
                console.log(this.state.armor)
            }).catch(error => console.log(error));
    }


    render() {
        const renderedAromor = this.state.armor.map((armor, index) => {
            return <ArmorStats key={index} armor={armor} />
        })
        return (
            <div className="wrapper">
                <div className="header">
                <div className="header-title"></div>
                </div>
                    {renderedAromor}
                </div>

        )
    }
}

export default ArmorInfo;