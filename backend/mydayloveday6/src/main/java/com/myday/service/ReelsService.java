package com.myday.service;

import java.util.List;

import com.myday.models.Reels;
import com.myday.models.User;

public interface ReelsService {
	public Reels createReel(Reels reel, User user);
	
	public List<Reels> findAllReels();
	
	public List<Reels> findUsersReels(Integer userId) throws Exception;
}