const express = require("express");
const router = express.Router();
const {
  addEvent,
  updateEvent,
  deleteEvent,
  viewEvent,
} = require("../controllers/events.controller");

router.post("/add", addEvent);
router.post("/update", updateEvent);
router.post("/delete", deleteEvent);
router.get("/view", viewEvent);

module.exports = router;
