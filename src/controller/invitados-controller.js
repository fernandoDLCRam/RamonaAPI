const oMyDBConnection = require("../database");

const getInvitados = (req, res) =>{
    const query = `CALL SP_GetInvitados();`;
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

const insertInvitados = (req, res) =>{
   
    const {
        nombre,
        telefono,
        correo
    } = req.body;

    console.log(nombre,telefono,correo)

    const query = `CALL SP_InsertInvitados(?,?,?);`;
    oMyDBConnection.query(query, 
        [
            nombre,
            telefono,
            correo
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
    );
};

module.exports = {
    getInvitados,
    insertInvitados,
};