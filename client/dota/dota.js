Template.dota.helpers({
    playerid() {
        return Dotaplayers.find({});
    },
});
Template.dota.events({
    'click #testbut': function (event) {
        var matchid = event.target.matchid.value;
        alert(matchid);
        Meteor.call("getMatchStats", function (error, results) {
            var matchdata = results.data;
            console.log(matchdata.result.players[0].account_id);
        });
    },
    'click #beisongbut': function (event) {
        Meteor.call("getplayerstats", '76561197989524226', function (error, results) {
            //console.log(results.data); //results.data should be a JSON object
            var playerstats = results.data;
            console.log("Name : " + playerstats.response.players[0].realname);
            console.log("Country : " + playerstats.response.players[0].loccountrycode);
            var date = new Date(playerstats.response.players[0].timecreated * 1000);
            console.log("Timecreated : " + date.toDateString());
            date = new Date(playerstats.response.players[0].lastlogoff * 1000);
            console.log("lastlogoff : " + date.toDateString());
        });
    },
    'click #beisongbut2': function (event) {
        var league_id = $("#leagueid").val();
        parseLeague(league_id);
    },
    'submit .dota-form'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var target = event.target;
        var matchid = target.matchid.value;

        // parseCounterMatchID(matchid);
        parseOpenDotaMatchID(matchid);
        // parseArrayOfGames


        ///                 ------------------SHOW PLAYER ID
        // Meteor.call("getMatchStats", matchid, function (error, results) {
        //     var matchdata = results.data;
        //
        //     for (var i = 0; i < matchdata.result.players.length; i++) {
        //         var player = matchdata.result.players[i];
        //
        //         var playerid = player.account_id;
        //         console.log(playerid);
        //         playerid = parseInt(playerid) + 960265728;
        //         //76561197960265728
        //         console.log("PLAYER ID =" + playerid);
        //
        //         // Meteor.call('insertplayerid', player.account_id, function (error, result) {
        //         //     if (error) {
        //         //         console.log("Unable to insert player id");
        //         //     }
        //         // });
        //     }
        // });

        ///                 ------------------SHOW PICK BANS

    },
});

//http://sharonkuo.me/dota2/index.html             <----------

// http://dev.dota2.com/showthread.php?t=58317
// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?steamids=76561198051541635&key=DA06EC331CB45A13D01C9B83155D4868\


//               MATCH STATS         =    3079544016
// https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3079544016&key=DA06EC331CB45A13D01C9B83155D4868


//              PLAYER STATS       =     76561197989524226
// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?steamids=76561197989524226&key=DA06EC331CB45A13D01C9B83155D4868


//             Open DOta Match API
//https://api.opendota.com/api/matches/3302605423

