package com.myday.service;

import java.util.List;

import com.myday.models.Post;

public interface PostService {
	Post createNewPost(Post post,  Integer userId) throws Exception;
	
	String deletePost(Integer postId, Integer userId);
	
	List<Post> findPostByUserId(Integer userId);
	
	Post findPostById(Integer postId);
	
	List<Post> findAllPost();
	
	Post savedPost(Integer postId, Integer userId);
}
