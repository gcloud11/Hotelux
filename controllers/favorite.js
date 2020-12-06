const db = require("../models")

module.exports = {
    getFavorites: function (req, res) {
        db.Favorite.find().then(function(results){
            res.json(results)
        })
    },
    saveFavorites: function(req, res) {
        db.Favorite.create(req.body).then(function(results){
            res.json(results)
        })
    },
    deleteFavorites: function(req, res) {
        db.Favorite.deleteOne({_id:req.params.id}).then(function(results){
            res.json(results)
        })
    }
}

