const router = require("express").Router();
const hostController = require("../../controllers/hostController");

// Matches with "/api/host"
router.route("/")
    .get(hostController.findAll)
    .post(hostController.create);

// Matches with "/api/host/:id"
router
    .route("/:id")
    .put(hostController.update)
    .delete(hostController.remove);

// Matches with "/api/host/:foodtype"
router
    .route("/:foodtype")
    .get(hostController.findByFood);

// Matches with "/api/host/:maxgroup"
router
    .route("/:maxgroup")
    .get(hostController.findByGroup);

// Matches with "/api/host/:foodtype/:maxgroup"
router
    .route("/:foodtype/:maxgroup")
    .get(hostController.findByFoodAndGroup);


module.exports = router;