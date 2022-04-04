import { createWebHistory, createRouter } from "vue-router";
import Create from '../components/AddElement.vue'
import Edit from '../components/EditElement.vue'
import IndexVivienda from '../components/ViviendaList.vue'
import Index from '../components/ElementList.vue'
import CreateVivienda from '../components/AddVivienda.vue'
import EditVivienda from '../components/EditVivienda.vue'

 
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
];
 

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
