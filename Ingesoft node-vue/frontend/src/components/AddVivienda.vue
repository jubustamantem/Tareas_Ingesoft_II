<template>
  <div>
    <div class="field">
      <label class="label">Vivienda</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Dirección"
          v-model="viviendaDireccion"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Capacidad</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Capacidad en m²"
          v-model="viviendaCapacidad"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Niveles</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Niveles"
          v-model="viviendaNiveles"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Municipio</label>
      <div class="control">
          <div class="select">
        <select class="form-control" @change="changeMun($event)">
            <option value="" selected disabled>Seleccione un ID</option>
            <option v-for="municipio in municipios" :value="municipio.ID_MUN" :key="municipio.ID_MUN">{{ municipio.ID_MUN }}</option>
        </select>
        </div>
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveVivienda">Guardar</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddVivienda",
  data() {
    return {
      viviendaDireccion: "",
      viviendaCapacidad: "",
      viviendaNiveles: "",
      viviendaMunicipio: "",
      municipioNombre: "",
      municipios: [],
      selectedJobTitle: null,
    };
  },
  created() {
    this.getMunicipios();
  },
  methods: {
    async saveVivienda() {
      try {
        await axios.post("http://localhost:5000/viviendas", {
          DIRECCION: this.viviendaDireccion,
          CAPACIDAD: this.viviendaCapacidad,
          NIVELES: this.viviendaNiveles,
          MUNICIPIO_ID_MUN: this.selectedMun,
        });
        this.viviendaDireccion = "";
        this.viviendaCapacidad = "";
        this.viviendaNiveles = "",
        this.viviendaMunicipio = ""
        this.$router.push("/viviendas");
      } catch (err) {
        console.log(err);
      }
    },
    async getMunicipios() {
      try {
        const response = await axios.get("http://localhost:5000/municipios");
        this.municipios = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    changeMun(event) {
        this.selectedMun = event.target.options[event.target.options.selectedIndex].text
    },
  },
};
</script>
 
<style>
</style>