package com.milk.backend.service;

import com.milk.backend.entity.MilkEntry;
import com.milk.backend.repository.MilkEntryRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MilkEntryService {
    private final MilkEntryRepository repository;

    public MilkEntryService(MilkEntryRepository repository){
        this.repository = repository;
    }

    //Add new entry
    public MilkEntry addEntry(MilkEntry entry){
        double total = entry.getQuantity() * entry.getPricePerLitre();
        entry.setTotal(total);
        entry.setPaid(false);
        return repository.save(entry);
    }

    //get all entries
    public List<MilkEntry> getAllEntries(){
        return repository.findAll();
    }

    //Mark as paid
    public MilkEntry markAsPaid(Long id){
        MilkEntry entry = repository.findById(id)
        .orElseThrow(() -> new RuntimeException("Entry not found"));

        entry.setPaid(true);
        return repository.save(entry);
    }

    //Detele entry

    public void deleteEntry(Long id){
        repository.deleteById(id);
    }
}
