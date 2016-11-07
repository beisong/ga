Meteor.subscribe('movie_list');

Template.main.helpers({
    movies: Movies.find({})
});