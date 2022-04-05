import   { getPersonas, getPersonaById, updatePersonaById, deletePersonaById, insertPersona} from "../models/personaModel.js";


export const showPersonas = (req, res) => {
    getPersonas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showPersonaById = (req, res) => {
    getPersonaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const createPersona = (req, res) => {
    const data = req.body;
    insertPersona(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const updatePersona = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePersonaById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const deletePersona = (req, res) => {
    const id = req.params.id;
    deletePersonaById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}