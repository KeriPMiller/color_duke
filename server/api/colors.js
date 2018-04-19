const router = require("express").Router();
const { Color } = require("../db/models");

module.exports = router;

// GET color routes
router.get("/", (req, res, next) => {
  Color.findAll()
    .then(colors => res.json(colors))
    .catch(next);
});
