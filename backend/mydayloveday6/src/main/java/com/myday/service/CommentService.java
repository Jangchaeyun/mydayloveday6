package com.myday.service;

import com.myday.models.Comment;

public interface CommentService {
	public Comment createComment(Comment comment, Integer postId, Integer userId) throws Exception;
	
	public Comment findCommentById(Integer commentId);
	
	public Comment likeComment(Integer CommentId);
}
