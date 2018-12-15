import React, { Component } from 'react';
import './Pick.css';
import Lane from '../lane/Lane';
import ChampionList from '../champion-list/ChampionList';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as championsActions from '../../actions/championsActions';

class Pick extends Component {

  componentDidMount(){
    this.props.championsActions.getChampions();
  }

  render() {
    let champions = this.props.champions;

    return (
      <div className="flex-row">
        <div className="champion-pool">
          <h1 style={{textAlign: 'center'}}>Champion Pool</h1>
          
          <Lane lane="Top" champions={champions}/>
          <Lane lane="Mid" champions={champions}/>
          <Lane lane="Jungle" champions={champions}/>
          <Lane lane="Bottom" champions={champions}/>
          <Lane lane="Support" champions={champions}/>
        </div>

        <ChampionList champions={champions}/>
      </div>
    );
  }

  
}

function mapStateToProps(state) {
  return {
    champions: state.champions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    championsActions: bindActionCreators(championsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pick);
