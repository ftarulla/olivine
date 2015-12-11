Meteor.publish('somethings', function(){
    return Somethings.find({});
});
