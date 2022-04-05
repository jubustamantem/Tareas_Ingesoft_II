import express from "express";
import { showMunicipios, showMunicipioById, createMunicipio, updateMunicipio, deleteMunicipio } from "../controllers/municipio.js";
import { createVivienda, deleteVivienda, showViviendaById, showViviendas, updateVivienda } from "../controllers/vivienda.js";
import { createPersona, deletePersona, showPersonaById, showPersonas, updatePersona } from "../controllers/persona.js";

const router = express.Router();

router.get('/municipios', showMunicipios);
router.get('/municipios/:id', showMunicipioById);
router.post('/municipios', createMunicipio);
router.put('/municipios/:id', updateMunicipio);
router.delete('/municipios/:id', deleteMunicipio)


router.get('/viviendas', showViviendas);
router.get('/viviendas/:id', showViviendaById);
router.post('/viviendas', createVivienda);
router.put('/viviendas/:id', updateVivienda);
router.delete('/viviendas/:id', deleteVivienda)


router.get('/personas', showPersonas);
router.get('/personas/:id', showPersonaById);
router.post('/personas', createPersona);
router.put('/personas/:id', updatePersona);
router.delete('/personas/:id', deletePersona)

export default router;