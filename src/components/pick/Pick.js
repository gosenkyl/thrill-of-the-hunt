import React, { Component } from 'react';
import './Pick.css';
import Lane from '../lane/Lane';
import ChampionList from '../champion-list/ChampionList';

class Pick extends Component {

  render() {
    return (
      <div className="flex-row">
        <div className="champion-pool">
          <h1 style={{textAlign: 'center'}}>Champion Pool</h1>
          
          <Lane lane="Top" />
          <Lane lane="Mid" />
          <Lane lane="Jungle" />
          <Lane lane="Bottom" />
          <Lane lane="Support" />
        </div>

        <ChampionList />
      </div>
    );
  }

  
}

export default Pick;
