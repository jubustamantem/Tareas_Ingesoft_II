import   { getMunicipios, getMunicipioById, insertMunicipio, updateMunicipioById, deleteMunicipioById} from "../models/municipioModel.js";


export const showMunicipios = (req, res) => {
    getMunicipios((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showMunicipioById = (req, res) => {
    getMunicipioById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const createMunicipio = (req, res) => {
    const data = req.body;
    insertMunicipio(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const updateMunicipio = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateMunicipioById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const deleteMunicipio = (req, res) => {
    const id = req.params.id;
    deleteMunicipioById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}