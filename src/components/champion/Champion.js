import React, { Component } from 'react';
import './Champion.css';

class Champion extends Component {
  constructor(props){
    super(props);

    this.state = {
      canDelete: props.onDelete || false,
      champion: props.champion
    };
  }

  render(){
    let champion = this.state.champion;

    if(!champion){
      return <div>No Champion Found.</div>;
    }

    let image = champion.image;
    let backgroundUrl = `url(http://ddragon.leagueoflegends.com/cdn/6.24.1/img/sprite/${image.sprite}) -${image.x}px -${image.y}px`;
    let imageStyle = {
        width: `${image.w}px`,
        height: `${image.h}px`,
        background: backgroundUrl
    };
    
    let onDelete = this.props.onDelete;
    let click = onDelete ? () => onDelete(this.state.champion) : () => {};

    return (
      <div className={`champion ${onDelete ? "deleteable" : ""}`}
            draggable="true" 
            onDragStart={(e) => this.drag(e, this.state.champion)}
            onClick={click}
            >
        <div style={imageStyle}></div>
        <div style={{textAlign: 'center', width: image.w, fontSize: 12}}>{this.state.champion.name}</div>
      </div>
    );
  }

  drag(e, champion){
    e.dataTransfer.setData("champion", JSON.stringify(champion));
  }
}

export default Champion;
