Meteor.publish('movie_list', function () {
    return Movies.find();
});

Meteor.publish('games_parsed', function () {
    return Gamesparsed.find();
});
