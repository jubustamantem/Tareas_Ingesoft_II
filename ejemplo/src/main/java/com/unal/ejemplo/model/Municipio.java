package com.unal.ejemplo.model;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "municipio")
public class Municipio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_mun;
    @NotNull
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "area")
    private float area;
    @Column(name = "presupuesto")
    private Double presupuesto;

    @OneToOne()
    @JoinColumn(name = "PERSONA_id", referencedColumnName = "id")
    private Persona persona;

    public Municipio(String nombre, float area, Double presupuesto) {
        super();
        this.nombre = nombre;
        this.area = area;
        this.presupuesto = presupuesto;
    }

    public int getId_mun() {
        return id_mun;
    }

    public void setId_mun(int id_mun) {
        this.id_mun = id_mun;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    public Double getPresupuesto() {
        return presupuesto;
    }

    public void setPresupuesto(Double presupuesto) {
        this.presupuesto = presupuesto;
    }
}