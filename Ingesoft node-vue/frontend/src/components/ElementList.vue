<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Municipio Name</th>
          <th>Area</th>
          <th>Presupuesto</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.ID_MUN">
          <td>{{ item.NOMBRE_MUN }}</td>
          <td>{{ item.AREA }}</td>
          <td>{{ item.PRESUPUESTO }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.ID_MUN } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteMunicipio(item.ID_MUN)"
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
  name: "ElementList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getMunicipios();
  },
 
  methods: {
    async getMunicipios() {
      try {
        const response = await axios.get("http://localhost:5000/municipios");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    async deleteMunicipio(id) {
      try {
        await axios.delete(`http://localhost:5000/municipios/${id}`);
        this.getMunicipios();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>