package com.unal.ejemplo.model;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "vivienda")
public class Vivienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_viv;
    @NotNull
    @Column(name = "direccion")
    private String direccion;
    @NotNull
    @Column(name = "capacidad")
    private int capacidad;
    @NotNull
    @Column(name = "niveles")
    private int niveles;

    @ManyToOne()
    @JoinColumn(name = "MUNICIPIO_id_mun", referencedColumnName = "id_mun")
    private Municipio municipio;

    public Vivienda(String direccion, int capacidad, int niveles, Municipio municipio) {
        this.direccion = direccion;
        this.capacidad = capacidad;
        this.niveles = niveles;
        this.municipio = municipio;
    }

    public int getId_viv() {
        return id_viv;
    }

    public void setId_viv(int id_viv) {
        this.id_viv = id_viv;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public int getNiveles() {
        return niveles;
    }

    public void setNiveles(int niveles) {
        this.niveles = niveles;
    }

    public Municipio getMunicipio() {
        return municipio;
    }

    public void setMunicipio(Municipio municipio) {
        this.municipio = municipio;
    }
}