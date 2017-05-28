Meteor.methods({
    // addReason: function (code, description) {
    //     Reason_options.insert({code: code, description: description});
    // }
    callapi: function (input) {
        this.unblock();
        return Meteor.http.call("GET", "http://jsonplaceholder.typicode.com/posts/1");
        //call skyscanner api with api key
    },
    getMatchStats: function (matchid) {
        this.unblock();
        return Meteor.http.call("GET", "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=" + matchid + "&key=DA06EC331CB45A13D01C9B83155D4868");
    },
    getplayerstats: function (playerid) {
        this.unblock();
        console.log("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?steamids=" + playerid + "&key=DA06EC331CB45A13D01C9B83155D4868");
        return Meteor.http.call("GET", "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?steamids=" + playerid + "&key=DA06EC331CB45A13D01C9B83155D4868");
    },
    insertplayerid: function (id) {
        this.unblock();
        Dotaplayers.insert({id: id});
    },
    getplayernames: function (id) {
        Dotaplayers.insert({id: id});
    },
});