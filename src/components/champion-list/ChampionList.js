import React, { Component } from 'react';
import './ChampionList.css';
import Champion from '../champion/Champion';
import ChampionService from '../../services/ChampionService';
import Loading from '../loading/Loading';

class ChampionList extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            champions: [],
            filteredChampions: []
        };
    }

    async componentDidMount(){
        //let result = await fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json");
       // let json = await result.json();
        
        let data = await new ChampionService().getChampions();
        let champions = Object.entries(data).map(champion => champion[1]);
    
        this.setState({
          isLoading: false,
          champions: champions,
          filteredChampions: champions
        });
    }

    onFilter(searchText){
        let filteredChampions = this.state.champions.filter(champion => {
           return champion.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1; 
        });

        this.setState({
            filteredChampions: filteredChampions
        });
    }

    render(){
        if(this.state.isLoading){
            return <Loading />;
        }

        return (
            <div className="champion-list-container">
                <div className="champion-list-filter">
                    <input type="text"
                        placeholder="Search"
                        onChange={(e) => this.onFilter(e.target.value)} />
                </div>
                <div id="champion-list" className="champion-list">
                {
                    this.state.filteredChampions.map(champion => {
                        return <Champion key={champion.id} champion={champion} />
                    })
                }
                </div>
            </div>
        );
    }

}

export default ChampionList;