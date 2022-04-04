import db from "../config/database.js"

// get all municipios

export const getMunicipios = (result) => {
    db.query("SELECT * FROM municipio", (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single municipio

export const getMunicipioById = (id, result) => {
    db.query("SELECT * FROM municipio WHERE ID_MUN = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertMunicipio = (data, result) => {
    db.query("INSERT INTO municipio SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Municipio
export const updateMunicipioById = (data, id, result) => {
    db.query("UPDATE municipio SET NOMBRE_MUN = ?, AREA = ?, PRESUPUESTO = ? WHERE ID_MUN = ?", [data.NOMBRE_MUN, data.AREA, data.PRESUPUESTO, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deleteMunicipioById = (id, result) => {
    db.query("DELETE FROM municipio WHERE ID_MUN = ?", [id], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}