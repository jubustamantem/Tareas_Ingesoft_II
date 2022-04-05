import db from "../config/database.js"

// get all viviendas

export const getPersonas = (result) => {
    db.query("SELECT * FROM persona", (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single persona

export const getPersonaById = (id, result) => {
    db.query("SELECT * FROM persona WHERE ID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertPersona = (data, result) => {
    db.query("INSERT INTO persona SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updatePersonaById = (data, id, result) => {
    db.query("UPDATE persona SET NOMBRE = ?, TELEFONO = ?, EDAD = ?, SEXO = ?, VIVIENDA_ID_VIV = ?, PERSONA_ID = ? WHERE ID = ?", [data.NOMBRE, data.TELEFONO, data.EDAD, data.SEXO, data.VIVIENDA_ID_VIV, data.PERSONA_ID, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deletePersonaById = (id, result) => {
    db.query("DELETE FROM persona WHERE ID = ?", [id], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}