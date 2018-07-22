import React, { Component } from 'react';
import './Lane.css';
import Champion from '../champion/Champion';

class Lane extends Component {

  constructor(props){
    super(props);

    this.state = {
        isLoading: true,
        lane: this.props.lane,
        champions: []
    };
  }

  async componentDidMount(){
    let savedChampions = this.loadFromLocalStorage();

    let champions = [];
    if(savedChampions && savedChampions.length > 0){
        let result = await fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json");
        let json = await result.json();
        let data = json.data;
        
        savedChampions.forEach(savedChampion => {
            let champion = data[savedChampion.championId];
            
            if(champion){
                champions.push(champion);
            }
        });
    }

    this.setState({
        isLoading: false,
        champions: champions
      });
  }

  render(){
    let champions = this.state.champions;

    return (
        <div className="lane" onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.drop(e)}>
            <div className="title">{this.state.lane}</div>
            <div className="list">
                {
                    champions.length === 0 ? <div>None yet! Drag and drop to add.</div> 
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


