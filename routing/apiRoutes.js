const friends = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends.friends);
    });

    app.get('/api/friends/match', function(req, res) {
        res.json(friends.matchMaker());
    });

    app.post("/api/friends", function(req, res) {
        friends.friends.push(req.body);
        res.json(true);
    });
};