package com.myday.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.myday.models.Reels;
import com.myday.models.User;
import com.myday.repository.ReelsRepository;

public class ReelsServiceImplementation implements ReelsService {
	@Autowired
	private ReelsRepository reelsRepository;
	
	@Autowired
	private UserService userService;

	@Override
	public Reels createReel(Reels reel, User user) {
		Reels createReel = new Reels();
		createReel.setTitle(null);
		return null;
	}

	@Override
	public List<Reels> findAllReels() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Reels> findUsersReels(Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}
}