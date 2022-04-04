import db from "../config/database.js"

// get all viviendas

export const getViviendas = (result) => {
    db.query("SELECT * FROM vivienda", (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single municipio

export const getViviendaById = (id, result) => {
    db.query("SELECT * FROM vivienda WHERE ID_VIV = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertVivienda = (data, result) => {
    db.query("INSERT INTO vivienda SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updateViviendaById = (data, id, result) => {
    db.query("UPDATE vivienda SET DIRECCION = ?, CAPACIDAD = ?, NIVELES = ?, MUNICIPIO_ID_MUN = ? WHERE ID_VIV = ?", [data.DIRECCION, data.CAPACIDAD, data.NIVELES, data.MUNICIPIO_ID_MUN, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deleteViviendaById = (id, result) => {
    db.query("DELETE FROM vivienda WHERE ID_VIV = ?", [id], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}