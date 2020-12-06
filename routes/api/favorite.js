const router = require("express").Router()
const favoriteController = require("../../controllers/favorite")

router.route("/")
.get(favoriteController.getFavorites)
.post(favoriteController.saveFavorites)

router.route("/:id")
.delete(favoriteController.deleteFavorites)

module.exports = router