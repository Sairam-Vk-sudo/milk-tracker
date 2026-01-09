package com.milk.backend.controller;

import com.milk.backend.entity.MilkEntry;
import com.milk.backend.service.MilkEntryService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/entries")
public class MilkEntryController {
    private final MilkEntryService service;

    public MilkEntryController(MilkEntryService service){
        this.service = service;
    }

    //Add new milk entry
    @PostMapping
    public MilkEntry addEntry(@RequestBody MilkEntry entry){
        return service.addEntry(entry);
    }

    //get all entries
    @GetMapping
    public List<MilkEntry> getAllEntries(){
        return service.getAllEntries();
    }

    @PutMapping("/{id}/pay")
    public MilkEntry markAsPaid(@PathVariable Long id){
        return service.markAsPaid(id);
    }

    //delete
    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable Long id){
        service.deleteEntry(id);
    }



}
