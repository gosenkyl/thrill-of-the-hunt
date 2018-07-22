import React, { Component } from 'react';
import './Ban.css';
import Lane from '../lane/Lane';
import ChampionList from '../champion-list/ChampionList';

class Ban extends Component {
    render(){
        return (
            <div className="flex-row">
                <div className="champion-pool">
                    <h1 style={{textAlign: 'center'}}>Bans</h1>
                    
                    <Lane lane="Ban" />
                </div>

                <ChampionList />
            </div>
        );
    }
}

export default Ban;