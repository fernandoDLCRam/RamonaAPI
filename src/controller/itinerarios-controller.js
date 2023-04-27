const oMyDBConnection = require("../database");

const getItinerario = (req, res) =>{
    const query = `CALL GetItinerariosSP();`;
    oMyDBConnection.query(query, (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.json(rows);
        } else {
            console.log(err);
            return err;
        }
    });
};

module.exports = {
    getItinerario,
};