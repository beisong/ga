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
    getOpenDotaMatchStats: function (matchid) {
        this.unblock();
        return Meteor.http.call("GET", "https://api.opendota.com/api/matches/" + matchid);
    },
    getLeagueData: function (leagueid) {
        this.unblock();
        return Meteor.http.call("GET", "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?league_id=" + leagueid + "&key=DA06EC331CB45A13D01C9B83155D4868");
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
    getHeroes: function () {
        this.unblock();
        var url = 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=DA06EC331CB45A13D01C9B83155D4868&language=en_us';
        return Meteor.http.call("GET", url);
    },
    saveHeroes: function () {
        Meteor.call('getHeroes', function (err, res) {
            // console.log(res);
            var data = res.data.result.heroes;

            data.forEach(function (oneHero) {
                console.log(" ----  INSERTING ID : " + oneHero.id + " NAME IS  : " + oneHero.localized_name);
                Heroes.insert({id: oneHero.id, name: oneHero.localized_name})
            });
        })
    },
    insertCounter: function (heroid, counterid) {
        Counter.update({hero: heroid, counter: counterid}, {$inc: {count: 1}});
    },


});


seedCounterPick = function () {
    if (Counterpick.find().count() == 0) {
        var herocount = Heroes.find().count();
        console.log(herocount);
        for (var i = 1; i <= herocount; i++) {
            console.log("THIS HERO NUMBER IS " + i);
            var objectofheroes = {};
            for (var j = 1; j <= herocount; j++) {
                objectofheroes[j] = 0;
            }

            var toinsert = {
                id: i,
                pickbefore: objectofheroes,
                pickafter: objectofheroes,
                banbefore: objectofheroes,
                banafter: objectofheroes
            };
            Counterpick.insert(toinsert);
        }
    }
    // var anti = {
    //     id: 124,
    //     pickbefore: {'1':0, '2':0, '3':0.......}
    //     pickafter: {'1':0, '2':0, '3':0.......},
    //     banbefore: {'1':0, '2':0, '3':0.......},
    //     banafterbefore: {'1':0, '2':0, '3':0.......},
    // };
    // Counterpick.insert(anti);

};

seedPickBefore = function () {
    if (Pickbefore.find().count() == 0) {
        var herocount = Heroes.find().count();
        console.log(herocount);
        for (var i = 1; i <= herocount; i++) {
            for (var j = 1; j <= herocount; j++) {
                Pickbefore.insert({id: i, pickid: j, count: 0});
            }
        }
    }
};


seedCounter = function () {
    if (Counter.find().count() == 0) {
        var herocount = Heroes.find().count();
        console.log(herocount);
        for (var i = 1; i <= herocount; i++) {
            for (var j = 1; j <= herocount; j++) {
                Counter.insert({hero: i, counter: j, count: 0});
            }
        }
    }

};