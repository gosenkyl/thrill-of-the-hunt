import React, { Component } from 'react';
import './Lane.css';
import Champion from '../champion/Champion';

class Lane extends Component {

  constructor(props){
    super(props);

    this.state = {
        isLoading: false,
        lane: this.props.lane,
        champions: [],
        savedChampions: []
    };
  }

  componentDidMount(){
      this.setState({
        savedChampions: this.loadFromLocalStorage()
      });
  }

  componentDidUpdate(prevProps){
      if(this.props.champions.length !== prevProps.champions.length){
        let results = [];
        let champions = this.props.champions;
        let savedChampions = this.state.savedChampions;

        if(savedChampions && savedChampions.length > 0){
            savedChampions.forEach(savedChampion => {
                let champion = champions.find(champion => champion.id === savedChampion.championId);
                
                if(champion){
                    results.push(champion);
                }
            });
        }
    
        this.setState({
            champions: results
        });
    }
  }

  render(){
    let champions = this.state.champions;

    return (
        <div className="lane" onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.drop(e)}>
            <div className="title">{this.state.lane}</div>
            <div className="list">
                {
                    champions.length === 0 ? <div className="no-results">Drag and drop to add</div> 
                    : champions.map(champion => {
                        return <Champion key={champion.id} champion={champion} onDelete={() => this.onDelete(champion)}/>
                    })
                }
            </div>
        </div>
    );
  }

  onDelete(champion){
      let champions = this.state.champions.filter(champ => champ.id !== champion.id);
      this.setState({champions: champions});  
      
      this.saveToLocalStorage(champions);
  }

  drop(e){
    e.preventDefault();
    let champion = JSON.parse(e.dataTransfer.getData("champion"));

    let champions = this.state.champions;

    let found = champions.find(obj => {
        return obj.id === champion.id;
    });

    if(!found){
        champions[champions.length] = champion;

        this.setState({
            champions: champions
        });

        this.saveToLocalStorage(champions);
    }
  }

  loadFromLocalStorage(){
      return JSON.parse(localStorage.getItem(`${this.state.lane.toLowerCase()}-lane`));
  }

  saveToLocalStorage(champions){
      let obj = champions.map((champion, index) =>{
          return {championId: champion.id, index: index};
      });

      localStorage.setItem(`${this.state.lane.toLowerCase()}-lane`, JSON.stringify(obj));
  }

}

export default Lane;


