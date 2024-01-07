package com.myday.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.myday.models.Post;
import com.myday.models.User;
import com.myday.repository.PostRepository;

@Service
public class PostServiceImplementaion implements PostService {
	
	@Autowired
	PostRepository postRepository;
	@Autowired
	UserService userService;

	@Override
	public Post createNewPost(Post post, Integer userId) throws Exception {
		
		User user = userService.findUserById(userId);
		
		Post newPost = new Post();
		newPost.setCaption(post.getCaption());
		newPost.setImage(post.getCaption());
//		newPost.setCreatedAt(new LocalDateTime.now());
		newPost.setVideo(post.getVideo());
		newPost.setUser(post.getUser());
		return newPost;
	}

	@Override
	public String deletePost(Integer postId, Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> findPostByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post findPostById(Integer postId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> findAllPost() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post savedPost(Integer postId, Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
