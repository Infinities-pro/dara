'use client';

import { useState } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // TODO: Add API call to get assistant response
    // For now, just echo back
    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: `You said: ${input}`,
    };
    setMessages((prev) => [...prev, assistantMessage]);
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
  };
}
