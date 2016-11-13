Meteor.methods({
    // addReason: function (code, description) {
    //     Reason_options.insert({code: code, description: description});
    // }
    callapi: function (input) {
        this.unblock();
        return Meteor.http.call("GET", "http://jsonplaceholder.typicode.com/posts/1");
        //call skyscanner api with api key
    }
});