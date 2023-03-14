const oMyDBConnection = require("../database");

const getVotos = (req, res) =>{
    const query = `CALL GetVotoSP();`;
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

const upVote = (req, res) =>{
    const {
        oVotoId
    } = req.body;

    const query = `CALL upVoteSP(?);`;
    oMyDBConnection.query(query, 
        [
            oVotoId
        ],
        (err, rows, fields) => {
            if (!err) {
                console.log(rows);
                res.json(rows);
            } else {
                console.log(err);
                return err;
            }
        }
    )
}

module.exports = {
    getVotos,
    upVote,
};