package com.myday.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myday.models.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{
	
}
