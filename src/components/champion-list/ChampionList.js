import React, { Component } from 'react';
import './ChampionList.css';
import Champion from '../champion/Champion';

class ChampionList extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            champions: []
        };
    }

    async componentDidMount(){
        let result = await fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json");
        let json = await result.json();
        
        this.setState({
          isLoading: false,
          champions: json.data
        });
    }

    render(){
        if(this.state.isLoading){
            return <div>Loading!!!</div>;
        }

        return (
            <div className="champion-list">
            {
                Object.entries(this.state.champions).map(obj => {
                    let champion = obj[1];
                    return <Champion key={champion.id} champion={champion} />
                })
            }
            </div>
        );
    }

}

export default ChampionList;