const {
  addEventService,
  updateEventService,
  deleteEventService,
  viewEventService,
} = require("../services/event.service");

const addEvent = (req, res, next) => {
  addEventService(req, res, next);
};

const updateEvent = (req, res, next) => {
  updateEventService(req, res, next);
};

const deleteEvent = (req, res, next) => {
  deleteEventService(req, res, next);
};

const viewEvent = (req, res, next) => {
  viewEventService(req, res, next);
};
module.exports = {
  addEvent,
  updateEvent,
  deleteEvent,
  viewEvent,
};
