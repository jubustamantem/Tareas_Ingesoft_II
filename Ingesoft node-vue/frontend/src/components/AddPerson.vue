<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/municipios/">
          Municipios
        </a>

        <a class="navbar-item" href="/viviendas/">
          Viviendas
        </a>

        <a class="navbar-item" href="/personas/">
          Personas
        </a>

      </div>
    </div>
  </nav>
  <div>
    <div class="field">
      <label class="label">Persona</label>
      <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Nombre Persona"
            v-model="personaNombre"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Telefono</label>
      <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Telefono"
            v-model="personaTelefono"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Edad</label>
      <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Edad"
            v-model="personaEdad"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Sexo</label>
      <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Sexo"
            v-model="personaSexo"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">ID VIV</label>
      <div class="control">
        <div class="select">
          <select class="form-control" @change="changeViv($event)">
            <option value="" selected disabled>Choose</option>
            <option v-for="vivienda in viviendas" :value="vivienda.ID_VIV" :key="vivienda.ID_VIV">{{ vivienda.ID_VIV }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">ID PER</label>
      <div class="control">
        <div class="select">
          <select class="form-control" @change="changePer($event)">
            <option value="" selected disabled>Choose</option>
            <option v-for="persona in personas" :value="persona.ID" :key="persona.ID">{{ persona.ID }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="savePersona">SAVE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "AddPersona",
  data() {
    return {
      personaNombre: "",
      personaTelefono: "",
      personaEdad: "",
      personaSexo: "",
      viviendaNombre: "",
      viviendas: [],
      personasNombre: "",
      personas: [],
      selectedJobTitle: null,
    };
  },
  created() {
    this.getViviendas();
    this.getPersonas();
  },
  methods: {
    async savePersona() {
      try {
        await axios.post("http://localhost:5000/personas", {
          NOMBRE: this.personaNombre,
          TELEFONO: this.personaTelefono,
          EDAD: this.personaEdad,
          SEXO: this.personaSexo,
          VIVIENDA_ID_VIV: this.selectedViv,
          PERSONA_ID: this.selectedPer,
        });
        this.personaNombre = "";
        this.personaTelefono = "";
        this.personaEdad = "";
        this.personaSexo= "",
            this.personaVivienda = ""
        this.personaPersona = ""

        this.$router.push("/personas");
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
    changeViv(event) {
      this.selectedViv = event.target.options[event.target.options.selectedIndex].text
    },
    async getPersonas() {
      try {
        const response = await axios.get("http://localhost:5000/personas");
        this.personas = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    changePer(event) {
      this.selectedPer = event.target.options[event.target.options.selectedIndex].text
    },
  },
};
</script>

<style>
</style>