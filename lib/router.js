Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'ApplicationLayout',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'appNotFound',

    // show the appLoading template whilst the subscriptions below load their data
    loadingTemplate: 'appLoading',

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present


    // waitOn: function() {
    //     return [
    //         Meteor.subscribe('publicLists'),
    //         Meteor.subscribe('privateLists')
    //     ];
    // }

});

Router.route('home', {
    path: '/',

    yieldTemplates: {
        'main': {to: 'body'}
    },

});


Router.route('chatapp', {
    path: '/chatapp',

    yieldTemplates: {
        'chatapp': {to: 'body'}
    },
});

Router.route('chat_register', {
    path: '/chatapp/register',

    yieldTemplates: {
        'chatapp_register': {to: 'body'}
    },
});

Router.route('chat_login', {
    path: '/chatapp/login',

    yieldTemplates: {
        'chatapp_login': {to: 'body'}
    },
});

Router.route('dota', {
    path: '/dota',

    yieldTemplates: {
        'dota': {to: 'body'}
    },
});