Meteor.publish('movie_list', function () {
    return Movies.find();
});

Meteor.publish('games_parsed', function () {
    return Gamesparsed.find();
});

Meteor.publish('fantasy', function () {
    return FantasyData.find();
});
