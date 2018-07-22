class ChampionService {
    async getChampions(){
        if(this.champions instanceof Array){
            return new Promise.resolve(this.champions);
        } else {
            return this._champions();
        }
    }

    async _champions(){
        return new Promise(resolve => {
            fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json").then(results => {
                return results.json();
            }).then(({data}) => {
                this.champions = data;
                resolve(data);
            });
        });
    }
}

export default ChampionService;