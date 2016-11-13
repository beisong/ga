Meteor.subscribe('movie_list');

Template.main.helpers({
    movies: Movies.find({})
});

Template.main.events({
    'click #test_button_id': function (e) {
        e.preventDefault();
        console.log("You pressed the button");
        Meteor.call("callapi", "abc", function (err, result) {
            console.log(result);
            console.log(result.content);
        });

    }
});