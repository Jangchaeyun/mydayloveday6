package com.myday.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myday.models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer>{

}
