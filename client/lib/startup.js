// counter starts at 0
// Session.setDefault('counter', 0);

// Template.map.helpers({
//   counter: function () {
//     return Session.get('counter');
//   }
// });

// Template.map.events({
//   'click button': function () {
//     // increment the counter when button is clicked
//     Session.set('counter', Session.get('counter') + 1);
//   }
// });

Meteor.startup(function() {
    console.log("=== Client startup /client/lib/startup.js === ");

});
