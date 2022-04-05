<template>
  <div>
    <div class="field">
      <label class="label">Municipio</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nombre del municipio"
          v-model="municipioName"
        />
      </div>
    </div>
 
     <div class="field">
      <label class="label">Área</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Área en km²"
          v-model="municipioArea"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Presupuesto</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Presupuesto en billones $COP"
          v-model="municipioPresupuesto"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateMunicipio">Actualizar</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditMunicipio",
  data() {
    return {
      municipioName: "",
      municipioArea: "",
      municipioPresupuesto: "",
    };
  },
  created: function () {
    this.getMunicipioById();
  },
  methods: {
    async getMunicipioById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/municipios/${this.$route.params.id}`
        );
        this.municipioName = response.data.NOMBRE_MUN;
        this.municipioArea = response.data.AREA;
        this.municipioPresupuesto = response.data.PRESUPUESTO;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateMunicipio() {
      try {
        await axios.put(
          `http://localhost:5000/municipios/${this.$route.params.id}`,
          {
            NOMBRE_MUN: this.municipioName,
            AREA: this.municipioArea,
            PRESUPUESTO: this.municipioPresupuesto,
          }
        );
        this.municipioName = "";
        this.municipioArea = "";
        this.municipioPresupuesto = ""
        this.$router.push("/municipios");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>