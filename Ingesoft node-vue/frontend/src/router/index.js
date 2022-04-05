import { createWebHistory, createRouter } from "vue-router";
import Create from '../components/AddElement.vue'
import Edit from '../components/EditElement.vue'
import IndexVivienda from '../components/ViviendaList.vue'
import Index from '../components/ElementList.vue'
import CreateVivienda from '../components/AddVivienda.vue'
import EditVivienda from '../components/EditVivienda.vue'
import CreatePersona from '../components/AddPersona.vue'
import EditPersona from '../components/EditPersona.vue'
import IndexPersona from '../components/PersonaList.vue'

 
const routes = [
  {
    name: 'Create',
    path: '/municipios/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/municipios/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/municipios',
    component: Index
  },
  {
    name: 'CreateVivienda',
    path: '/viviendas/create',
    component: CreateVivienda
  },
  {
    name: 'EditVivienda',
    path: '/viviendas/edit/:id',
    component: EditVivienda
  },
  {
    name: 'IndexVivienda',
    path: '/viviendas',
    component: IndexVivienda
  },
  {
    name: 'CreatePersona',
    path: '/personas/create',
    component: CreatePersona
  },
  {
    name: 'EditPersona',
    path: '/personas/edit/:id',
    component: EditPersona
  },
  {
    name: 'IndexPersona',
    path: '/personas',
    component: IndexPersona
  },
];
 

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
