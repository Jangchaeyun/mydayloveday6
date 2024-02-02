package com.myday.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myday.models.Chat;
import com.myday.models.User;
import com.myday.repository.ChatRepository;

@Service
public class ChatServiceImplementation implements ChatService {
	@Autowired
	private ChatRepository chatRepository;

	@Override
	public Chat createChat(User reqUser, User user2) {
		Chat isExist = chatRepository.findChatByUsersId(user2, reqUser);
		
		if (isExist != null) {
			return isExist;
		}
		Chat chat = new Chat();
		chat.getUsers().add(user2);
		chat.getUsers().add(reqUser);
		
		return chatRepository.save(chat);
	}

	@Override
	public Chat findChatById(Integer chatId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Chat> findUsersChat(Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
