package com.myday.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myday.models.User;

@RestController
public class UserController {
	@GetMapping("/users")
	public List<User> getUsers() {
		List<User> users = new ArrayList<>();
		
		User user1 = new User(1, "myday", "love", "mydayloveday6@gmail.com", "12345");
		User user2 = new User(2, "zzang", "sally", "zzangsally6@gmail.com", "67890");
		
		users.add(user1);
		users.add(user2);
		
		return users;
	}
	
	@GetMapping("/users/{userId}")
	public User getUserById(@PathVariable("userId") Integer id) {
		User user1 = new User(1, "myday", "love", "mydayloveday6@gmail.com", "12345");
		user1.setId(id);
		
		return user1;
	}
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		User newUser = new User();
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(user.getPassword());
		newUser.setId(user.getId());
		
		return newUser;
	}
}
