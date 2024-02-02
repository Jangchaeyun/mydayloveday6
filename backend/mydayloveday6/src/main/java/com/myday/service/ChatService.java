package com.myday.service;

import java.util.List;

import com.myday.models.Chat;
import com.myday.models.User;

public interface ChatService {
	public Chat createChat(User reqUser, User user2);
	public Chat findChatById(Integer chatId);
	public List<Chat> findUsersChat(Integer userId);
}
