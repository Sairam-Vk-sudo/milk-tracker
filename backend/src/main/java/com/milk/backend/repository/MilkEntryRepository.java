package com.milk.backend.repository;

import com.milk.backend.entity.MilkEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MilkEntryRepository extends JpaRepository<MilkEntry, Long>{
    
}
