// Seed the movie database with a few movies
Meteor.startup(function () {
    if (Movies.find().count() == 0) {
        Movies.insert({title: "Star Wars", director: "Lucas"});
        Movies.insert({title: "Memento", director: "Nolan"});
        Movies.insert({title: "King Kong", director: "Jackson"});
    }
    //SEEDING HEROES INTO DATABASE // CALL ONCE ONLY
    // Meteor.call('saveHeroes');
});