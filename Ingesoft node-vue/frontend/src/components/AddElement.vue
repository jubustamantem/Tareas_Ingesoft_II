<template>
  <div>
    <div class="field">
      <label class="label">Municipio</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Municipio Name"
          v-model="municipioName"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Area</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Area"
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
          placeholder="Presupuesto"
          v-model="municipioPresupuesto"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveMunicipio">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddMunicipio",
  data() {
    return {
      municipioName: "",
      municipioArea: "",
      municipioPresupuesto: "",
    };
  },
  methods: {
    async saveMunicipio() {
      try {
        await axios.post("http://localhost:5000/municipios", {
          NOMBRE_MUN: this.municipioName,
          AREA: this.municipioArea,
          PRESUPUESTO: this.municipioPresupuesto,
        });
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