package com.unal.ejemplo.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "persona")
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "telefono")
    private int telefono;
    @NotNull
    @Column(name = "edad")
    private int edad;
    @Column(name = "sexo")
    private String sexo;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "persona_has_vivienda",
            joinColumns = @JoinColumn(name = "PERSONA_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "VIVIENDA_id_viv", referencedColumnName = "id_viv")
    )
    private Collection<Vivienda> viviendas;

    @OneToMany()
    @JoinColumn(name = "PERSONA_id", referencedColumnName = "id")
    private Collection<Persona> persona;

    @ManyToOne()
    @JoinColumn(name = "VIVIENDA_id_viv", referencedColumnName = "id_viv")
    private Vivienda vivienda;

    public Persona(String nombre, int telefono, int edad, String sexo, Collection<Vivienda> viviendas, Collection<Persona> persona, Vivienda vivienda) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.edad = edad;
        this.sexo = sexo;
        this.viviendas = viviendas;
        this.persona = persona;
        this.vivienda = vivienda;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Collection<Vivienda> getViviendas() {
        return viviendas;
    }

    public void setViviendas(Collection<Vivienda> viviendas) {
        this.viviendas = viviendas;
    }

    public Collection<Persona> getPersona() {
        return persona;
    }

    public void setPersona(Collection<Persona> persona) {
        this.persona = persona;
    }

    public Vivienda getVivienda() {
        return vivienda;
    }

    public void setVivienda(Vivienda vivienda) {
        this.vivienda = vivienda;
    }
}
