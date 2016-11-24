/**
 * Created by weisong on 024-24-Nov-16.
 */
Template.chatapp_register.events({
    'submit form': function (event) {
        event.preventDefault();
        const target = event.target;
        var email = target.email.value;
        var password = target.password.value;
        var name = target.name.value;
        Accounts.createUser({
            email: email,
            password: password,
            profile: {name: name}
        }, function (error) {
            if (error) {
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go("chatapp"); // Redirect user if registration succeeds
            }
        });


    }
});