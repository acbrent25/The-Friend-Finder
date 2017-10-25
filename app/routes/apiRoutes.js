// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
      res.json(friends);
    });


  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {

      var userTotal = 0;

      friends.push(req.body);

      var newFriend = req.body;
      console.log("newFriend: " + newFriend);
      var newFriendTotals = newFriend.totals;
      console.log("newFriendTotals: " + newFriendTotals);
      var difference = 0;
      var differences = [];

      for (var i = 0; i < friends.length; i++) {
          console.log("Name: " + friends[i].name);

          for (var j = 0; j < newFriendTotals.length; j++) {
            difference = Math.abs(friends[i].totals[j] - newFriend.totals[j]);
            console.log("friends[i].totals[j]: " + friends[i].totals[j]);
            console.log("newFriend.totals[j]): " + newFriend.totals[j]);
            console.log("difference: " + difference);
          }
      }  

    });

}