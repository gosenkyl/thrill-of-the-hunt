import * as types from './actionTypes';

export function getChampions(){
    return dispatch => {
        return fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
        .then(response => response.json())
        .then(json => dispatch(setChampions(json)));
    };
}

export function setChampions(json) {
    return {type: types.SET_CHAMPIONS, champions: Object.entries(json.data).map(champion => champion[1])};
}