import   { getViviendas, getViviendaById, updateViviendaById, deleteViviendaById, insertVivienda} from "../models/viviendaModel.js";


export const showViviendas = (req, res) => {
    getViviendas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showViviendaById = (req, res) => {
    getViviendaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const createVivienda = (req, res) => {
    const data = req.body;
    insertVivienda(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const updateVivienda = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateViviendaById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const deleteVivienda = (req, res) => {
    const id = req.params.id;
    deleteViviendaById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}