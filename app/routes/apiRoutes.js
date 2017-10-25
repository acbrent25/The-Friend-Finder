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


app.post("/api/friends", function(req, res) {
    //Capture new friend data
    var newFriend = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    
    var userData = req.body;
    var userScores = req.body.scores;
    var totalDifference = 0;

    console.log("userScores:" + userScores);

      for (i = 0; i < friends.length; i++){
        totalDifference = 0;
  
        for ( j = 0; j < friends[i].scores[i]; j++ ) {
  
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
  
            if ( totalDifference <= newFriend.friendDifference ) {
              newFriend.name = friends[i].name;
              newFriend.photo = friends[i].photo;
              newFriend.friendDifference = totalDifference;	
            } 
          } 
        } 
  
  
    friends.push(userData);
    res.json(newFriend);
  
    }); 
  } 