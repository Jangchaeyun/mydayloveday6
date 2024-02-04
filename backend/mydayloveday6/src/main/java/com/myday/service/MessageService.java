package com.myday.service;

import java.util.List;

import com.myday.models.Message;
import com.myday.models.User;

public interface MessageService {
	public Message createMessage(User user, Integer chatId, Message req) throws Exception;
	public List<Message> findChatsMessages(Integer chatId) throws Exception;
}
