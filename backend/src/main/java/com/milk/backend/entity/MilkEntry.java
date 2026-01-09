package com.milk.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

import org.springframework.cglib.core.Local;

@Entity
public class MilkEntry {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    private double quantity;
    private double pricePerLitre;
    private double total;
    private boolean paid;

    public MilkEntry(){

    }

    public MilkEntry(LocalDate date, double quantity, double pricePerLitre, double total, boolean paid){
        this.date = date;
        this.quantity = quantity;
        this.pricePerLitre = pricePerLitre;
        this.total = total;
        this.paid = paid;

    }

    public Long getId(){
        return id;
    }
    public LocalDate getDate(){
        return date;
    }
    public void setDate(LocalDate date){
        this.date = date;
    }
    public double getQuantity(){
        return quantity;
    }
    public void setQuantity(double quantity){
        this.quantity = quantity;
    }
    public double getPricePerLitre(){
        return pricePerLitre;
    }
    public void setPricePerLitre(double pricePerLitre){
        this.pricePerLitre = pricePerLitre;
    }
    public double getTotal(){
        return total;
    }
    public void setTotal(double total){
        this.total = total;
    }
    public boolean getPaid(){
        return paid;
    }
    public void setPaid(boolean paid){
        this.paid = paid;
    }
}   
