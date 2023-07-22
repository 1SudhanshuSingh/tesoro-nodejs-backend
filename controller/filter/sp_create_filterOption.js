const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createFilterOption = (req, res) => {
  const values = [req.body.optionName];
  executeStoredProcedure("sp_create_filterOption", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          jsonResponse: JSON.parse(result["0"].jsonResponse),
          status: 200,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = createFilterOption;

// const { executeStoredProcedure } = require("../../helpers/storedProcedure");

// const getAllFilterAvailableForFilterId = (req, res) => {
//   const values = [
//     req.body.filterListID,
//     req.body.maxFilterOptionID,
//     req.body.limit,
//   ];
//   executeStoredProcedure("sp_get_allFilterOptionsAvailableForFilterID", [
//     values,
//   ]).then((result) => {
//     if (result["0"]["output"] < 0) {
//       res.json(result);
//     } else {
//       try {
//         res.json({
//           ...result["0"],
//           jsonResponse: JSON.parse(result["0"].jsonResponse),
//           status: 200,
//         });
//       } catch (error) {
//         throw error;
//       }
//     }
//   });
// };

// module.exports = getAllFilterAvailableForFilterId;
