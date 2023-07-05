const { db } = require("../db");
const executeStoredProcedure = (procedureName, params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `CALL ${procedureName}(${params
        .map(() => "?")
        .join(",")}, @v_out, @v_msg, @v_json);`,
      params,
      (error, result) => {
        if (error) {
          reject(error);
        }
        db.query(
          "SELECT @v_out AS output, @v_msg AS message, @v_json AS jsonResponse",
          function (err, rows) {
            if (err) {
              console.error("Error retrieving output parameter: " + err.stack);
              return;
            }
            resolve(rows);
          }
        );
      }
    );
  });
};

module.exports = { executeStoredProcedure };
