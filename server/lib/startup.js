
Meteor.startup(function () {
    console.log("=== Server startup /server/lib/startup.js === ");

    if (process.env.NODE_ENV === 'development') {
        console.log("=== Server in development mode === ");

        // Fakes .. not cakes!!
        createFakes();
    }

});

var createFakes = function() {
    console.log("=== Creating test things ... === ");

    // first, clear all!!
    Somethings.remove({});

    // and then ...
    var somethings = [
        { bla: 'bla' },
        { ble: 'ble' }
    ]

    somethings.forEach(function(something) {
        Somethings.insert(something);
    });

    console.log("=== Creating test things ... DONE === ");
}
