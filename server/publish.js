Meteor.publish('movie_list', function () {
    return Movies.find();
});
