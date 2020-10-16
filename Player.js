class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var countref = database.ref("playerCount");
        countref.on("value",function(data){
            playerCount = data.val();

        })
    }
    updateCount(count){
        database.ref("/").update({playerCount:count});

    }

    update (name){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({name:this.name,distance:this.distance});
    }

    static getPlayerInfo(){
        var pInfo = database.ref("players");
        pInfo.on("value",(data)=>{allPlayers = data.val});
    }

}