<template>
  <div>
    <router-link :to="{ name: 'CreatePersona' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Persona Name</th>
          <th>Telefono</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Vivienda</th>
          <th>Persona</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.ID">
          <td>{{ item.NOMBRE }}</td>
          <td>{{ item.TELEFONO }}</td>
          <td>{{ item.EDAD }}</td>
          <td>{{ item.SEXO }}</td>
          <td>{{ item.VIVIENDA_ID_VIV }}</td>
          <td>{{ item.PERSONA_ID }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'EditPersona', params: { id: item.ID } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletePersona(item.ID)"
              >Delete</a
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
  name: "PersonaList",
  data() {
    return {
      items: [],
      vivienda: [],
      persona: [],
    };
  },
 
  created() {
    this.getPersonas();
    this.getViviendas();
  },
 
  methods: {
    async getPersonas() {
      try {
        const response = await axios.get("http://localhost:5000/personas");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    async deletePersona(id) {
      try {
        await axios.delete(`http://localhost:5000/personas/${id}`);
        this.getPersonas();
      } catch (err) {
        console.log(err);
      }
    },

    async getViviendas() {
      try {
        const response = await axios.get("http://localhost:5000/viviendas");
        this.viviendas = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>