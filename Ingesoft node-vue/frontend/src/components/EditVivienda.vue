<template>
  <div>
    <div class="field">
      <label class="label">Vivienda</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Vivienda Name"
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
          placeholder="Capacidad"
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
          placeholder="Presupuesto"
          v-model="viviendaNiveles"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">ID MUN</label>
      <div class="control">
          <div class="select">
        <select class="form-control" @change="changeMun($event)">
            <option value="" selected disabled>Choose</option>
            <option v-for="municipio in municipios" :value="municipio.ID_MUN" :key="municipio.ID_MUN">{{ municipio.ID_MUN }}</option>
        </select>
        </div>
      </div>
    </div>


    <div class="control">
      <button class="button is-success" @click="updateVivienda">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditVivienda",
  data() {
    return {
      viviendaDireccion: "",
      viviendaCapacidad: "",
      viviendaNiveles: "",
      viviendaMunicipio: "",
      municipioNombre: "",
      municipios: [],
      selectedMun: null,
    };
  },
  created: function () {
    this.getViviendaById();
    this.getMunicipios();
  },
  methods: {
    async getViviendaById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/viviendas/${this.$route.params.id}`
        );
        this.viviendaDireccion = response.data.DIRECCION;
        this.viviendaCapacidad = response.data.CAPACIDAD
        this.viviendaNiveles = response.data.NIVELES;
        this.viviendaMunicipio = response.data.MUNICIPIO_ID_MUN;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateVivienda() {
      try {
        await axios.put(
          `http://localhost:5000/viviendas/${this.$route.params.id}`,
          {
            DIRECCION: this.viviendaDireccion,
            CAPACIDAD: this.viviendaCapacidad,
            NIVELES: this.viviendaNiveles,
            MUNICIPIO_ID_MUN: this.selectedMun,
          }
        );
        this.viviendaDireccion = "";
        this.viviendaCapacidad = "";
        this.viviendaNiveles = "";
        this.viviendaMunicipio = "";
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