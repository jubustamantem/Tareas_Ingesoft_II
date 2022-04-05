<template>
  <div>
    <router-link :to="{ name: 'CreateVivienda' }" class="button is-success mt-5"
      >Agregar</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Vivienda - Dirección</th>
          <th>Capacidad (m²)</th>
          <th>Niveles</th>
          <th>ID Municipio</th>
          <th class="has-text-centered">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.ID_VIV">
          <td>{{ item.DIRECCION }}</td>
          <td>{{ item.CAPACIDAD }}</td>
          <td>{{ item.NIVELES }}</td>
          <td>{{ item.MUNICIPIO_ID_MUN }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'EditVivienda', params: { id: item.ID_VIV } }"
              class="button is-info is-small"
              >Editar</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteVivienda(item.ID_VIV)"
              >Eliminar</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViviendaList",
  data() {
    return {
      items: [],
      municipio : [],
    };
  },
 
  created() {
    this.getViviendas();
    this.getMunicipios();
  },
 
  methods: {
    async getViviendas() {
      try {
        const response = await axios.get("http://localhost:5000/viviendas");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    async deleteVivienda(id) {
      try {
        await axios.delete(`http://localhost:5000/viviendas/${id}`);
        this.getViviendas();
      } catch (err) {
        console.log(err);
      }
    },
    async getMunicipios() {
      try {
        const response = await axios.get(`http://localhost:5000/municipios`);
        this.municipios = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>