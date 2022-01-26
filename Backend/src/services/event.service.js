const db = require("./database");

const addEventService = (req, res, next) => {
  var insert = `INSERT INTO todos(title,description,status)
                VALUES(?,?,?);`;
  db.connection.query(
    insert,
    [req.body.title, req.body.description, req.body.status],
    function (err, results, fields) {
      if (err) {
        //console.log(err.message);
        var e = new Error("Event added failed");
        e.status = 500;
        next(e);
      } else {
        res.json({
          msg: "Event added succesfully",
        });
      }
    }
  );
};

const updateEventService = (req, res, next) => {
  if (req.body.id != null) {
    //All updating
    if (
      req.body.title != null &&
      req.body.description != null &&
      req.body.status != null
    ) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
      //2 updating
    } else if (req.body.title != null && req.body.description != null) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
    } else if (req.body.title != null && req.body.status != null) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
    } else if (req.body.description != null && req.body.status != null) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
      // 1 updating
    } else if (req.body.title != null) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
    } else if (req.body.description != null) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
    } else if (req.body.status != null) {
      var para = [
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.id,
      ];

      var update = `UPDATE todos SET title = ? , description= ? , status = ? WHERE todos.id = ? ;`;
    } else {
      var e = new Error("ERROR: Empty parameters");
      e.status = 500;
      next(e);
    }

    db.connection.query(update, para, function (err, results, fields) {
      if (err) {
        //console.log(err.message);
        var e = new Error("Event update failed");
        e.status = 500;
        next(e);
      } else {
        res.json({
          msg: "Event updated succesfully",
        });
      }
    });
  } else {
    var e = new Error("ERROR: ID id required");
    e.status = 500;
    next(e);
  }
};

const deleteEventService = (req, res, next) => {
  var delete_query = `DELETE FROM todos WHERE todos.id = ?`;
  db.connection.query(
    delete_query,
    [req.body.id],
    function (err, results, fields) {
      if (err) {
        //console.log(err.message);
        var e = new Error("Event deleting failed");
        e.status = 500;
        next(e);
      } else {
        res.json({
          msg: "Event deleted succesfully",
        });
      }
    }
  );
};

const viewEventService = (req, res, next) => {
  var view_query = `SELECT * FROM todos WHERE id = 2`;
  db.connection.query(view_query, function (err, results, fields) {
    if (err) {
      var e = new Error("Event reading failed");
      e.status = 500;
      next(e);
    } else {
      res.json({
        id: results[0].id,
        title: results[0].title,
        description: results[0].description,
        status: results[0].status,
      });
    }
  });
};

module.exports = {
  addEventService,
  updateEventService,
  deleteEventService,
  viewEventService,
};
