package com.myday.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myday.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
}