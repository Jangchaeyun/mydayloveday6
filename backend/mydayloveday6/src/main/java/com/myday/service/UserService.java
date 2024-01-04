package com.myday.service;

import java.util.List;

import com.myday.models.User;

public interface UserService {
	public User registerUser(User user);
	
	public User findUserById(Integer userId) throws Exception;
	
	public User findUserByEmail(String email);
	
	public User followUser(Integer userId1, Integer userId);
	
	public User updateUser(User user);
	
	public List<User> searchUser(String query);
}
