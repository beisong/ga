/**
 * Created by weisong on 027-27-Jun-17.
 */

parseOpenDotaMatchID = function (matchid) {
    Meteor.call("getOpenDotaMatchStats", matchid, function (error, results) {

        // console.log(results);

        var matchdata = results.data;
        var matchid = matchdata.match_id;
        var playerdata = matchdata.players;
        console.log("Radiant Team ID : " + matchdata.radiant_team.team_id);
        console.log("Radiant Name : " + matchdata.radiant_team.name);
        console.log("Dire Team ID : " + matchdata.dire_team.team_id);
        console.log("Radiant Team ID : " + matchdata.dire_team.name);

        playerdata.forEach(function (onePlayer) {
                // console.log("Match ID : " + onePlayer.match_id);
                // console.log("Acct ID : " + onePlayer.account_id);
                console.log("Player Name: " + onePlayer.name);

                if ((onePlayer.isRadiant && onePlayer.radiant_win) || (!onePlayer.isRadiant && !onePlayer.radiant_win)) {
                    // console.log("Player WON");
                }
                else {
                    // console.log("Player LOST");
                }

                var raw_point = (0.3 * onePlayer.kills +
                    (3 - 0.3 * onePlayer.deaths) +
                    0.003 * (onePlayer.last_hits + onePlayer.denies) +
                    0.002 * onePlayer.gold_per_min +
                    onePlayer.towers_killed +
                    onePlayer.roshans_killed +
                    3 * onePlayer.teamfight_participation +
                    0.5 * onePlayer.obs_placed +
                    0.5 * onePlayer.camps_stacked +
                    0.25 * onePlayer.rune_pickups +
                    4 * onePlayer.firstblood_claimed +
                    0.05 * onePlayer.stuns
                );
                // (0.3 * onePlayer.kills );
                var fantasy_point = Math.round(raw_point * 10) / 10;
                console.log("Fantasy Point: " + fantasy_point);
            }
        );

    });
};
parseCounterMatchID = function (matchid) {
    Meteor.call("getMatchStats", matchid, function (error, results) {

        var matchdata = results.data;
        var pickdata = results.data.result.picks_bans;
        var team0 = [];
        var team1 = [];
        if (matchdata) {
            console.log(matchid + " IS PARSED");
        }
        else {
            console.log('=================          NOT     Parsed         =========');
        }


        pickdata.forEach(function (oneRecord) {
            // console.log("PICK/BAN : " + oneRecord.is_pick + " |Hero : " + oneRecord.hero_id + " |Team : " + oneRecord.team + " |order : " + oneRecord.order);
            if (oneRecord.is_pick) {                    //   --------       Pick         --------
                if (oneRecord.team === 0) {                     //   --------       Team 0         --------
                    team0.push(oneRecord.hero_id);              //   --------       Add hero to team 0         --------
                    if (team1.length > 0) {                     //   --------       If Team 1 already has hero, insert picked hero as counter         --------
                        for (var i in team1) {
                            // console.log("Team 1 Heroes are : " + team1[i]);
                            Meteor.call("insertCounter", team1[i], oneRecord.hero_id, function (error, results) {
                            });
                        }
                    }
                }
                else if (oneRecord.team === 1) {                    //   --------       Team          --------
                    team1.push(oneRecord.hero_id);                  //   --------       Add hero to team 0         --------
                    if (team0.length > 0) {                         //   --------       If Team 0 already has hero, insert picked hero as counter         --------
                        for (var j in team0) {
                            Meteor.call("insertCounter", team0[j], oneRecord.hero_id, function (error, results) {
                            });
                        }
                    }
                }
            } else {                                            //   --------       Ban         --------
                if (team0.length > 0 || team1.length > 0) {     //   --------       Not first 2 ban         --------//
                    if (oneRecord.team === 0) {                 //   --------       Team 0 Ban         --------//
                        for (var j in team0) {                  //   --------       Insert as counter for own team picked hero         --------//
                            Meteor.call("insertCounter", team0[j], oneRecord.hero_id, function (error, results) {
                            });
                        }
                    }
                    else if (oneRecord.team === 1) {            // Team 1 Ban
                        for (var j in team1) {                  //   --------       Insert as counter for own team picked hero         --------//
                            Meteor.call("insertCounter", team1[j], oneRecord.hero_id, function (error, results) {
                            });
                        }
                    }
                }
            }
        });
    });
};

