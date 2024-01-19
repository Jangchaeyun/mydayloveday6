package com.myday.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myday.config.JwtProvider;
import com.myday.models.User;
import com.myday.repository.UserRepository;
import com.myday.response.AuthResponse;
import com.myday.service.UserService;

@RestController
public class AuthController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/users")
	public AuthResponse createUser(@RequestBody User user) throws Exception {
		User isExist = userRepository.findByEmail(user.getEmail());
		
		if (isExist != null) {
			throw new Exception("email already used with another account");
		}
		
		User newUser = new User();
		
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(passwordEncoder.encode(user.getPassword()));
		newUser.setId(user.getId());
		
		User savedUser = userRepository.save(newUser);
		
		Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
		
		String token = JwtProvider.generateToken(authentication);
		
		return savedUser;
	}
}