const router = require("express").Router();
const searchRoutes = require("./search");


// Book routes
router.use("/search", searchRoutes);


module.exports = router;
