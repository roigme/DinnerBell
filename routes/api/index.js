const router = require("express").Router();
const userRoutes = require("./user");
const hostRoutes = require("./host");

// User and Host routes
router.use("/user", userRoutes);

router.use("/host", hostRoutes);

module.exports = router;